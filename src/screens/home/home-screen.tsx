/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  ActionButton,
  MovieText,
  ScreenContainer,
  EmptyDataView,
} from '../../components';

import useStyles from '../../hooks/use-style';
import {Screens} from '../../library/enums';
import navigationService from '../../navigation/navigation-service';
import {getMoviesForGenresSelector} from '../../store/selectors/genre.selector';
import {Movie, Reducers} from '../../library/types';
import {
  DISCOVER,
  GENRE_LIST,
  HOME_SCREEN_HEADER_TEXT,
} from '../../library/constants';
import {getMovies} from '../../store/actions/movie.actions';

import WhistList from '../../res/icons/whist-list-icon';
import colors from '../../theme/color';
import {ThemeA, ThemeB, ThemeC} from '../../theme/themes';

import ListItem from './components/list-item';

import useDimension from '../../hooks/dimension.hook';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {HEIGHT} = useDimension();

  const movieData = useSelector(getMoviesForGenresSelector);
  const loadErrors = useSelector(
    (state: Reducers) => state.appStateReducer.loadingStatus.loadErrors,
  );
  const hasErrors = Boolean(loadErrors?.[DISCOVER] || loadErrors?.[GENRE_LIST]);
  const {setTheme} = useStyles();

  const navigateToDetails =
    (selectedIndex: number) => (selectedMovie: Movie) => {
      // setting a different theme to flip typography, views & colors
      const selectedTheme = [ThemeA, ThemeB, ThemeC];
      setTheme(selectedTheme[selectedIndex]);
      navigationService.navigate(Screens.DETAIL_PAGE, {selectedMovie});
    };

  const navigateToWhistList = () =>
    navigationService.navigate(Screens.WHIST_LIST);

  const loadData = () => dispatch(getMovies());

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenContainer
      withoutBackButton
      rightView={
        <ActionButton onPress={navigateToWhistList} buttonType="Default">
          <WhistList />
        </ActionButton>
      }
      middleView={
        <MovieText
          textStyles={styles.screenTitle}
          isRichText
          openTag={'<a>'}
          closeTag={'</a>'}
          richTextStyles={{
            p2: {color: colors.darkRed},
          }}
          text={HOME_SCREEN_HEADER_TEXT}
        />
      }>
      <>
        {movieData?.map((items, index) => (
          <ListItem
            key={items._id}
            section={items}
            onPress={navigateToDetails(index)}
          />
        ))}
        {hasErrors && (
          <EmptyDataView
            showReloadButton
            onReload={loadData}
            containerStyle={{height: HEIGHT * 0.8}}
          />
        )}
      </>
    </ScreenContainer>
  );
};

export default HomeScreen;
