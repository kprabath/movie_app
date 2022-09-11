/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp} from '@react-navigation/native';

import {
  MovieDetailComponent,
  PosterComponent,
  ScreenContainer,
  EmptyDataView,
} from '../../components';

import useDimension from '../../hooks/dimension.hook';
import {IMAGE_URL} from '../../library/config';
import {
  ADD_TO_SELECTED_MOVIES,
  DETAIL_SCREEN_HEADER,
  MOVIE_DETAILS,
  REMOVE_FROM_SELECTED_MOVIE,
} from '../../library/constants';
import {Reducers, Movie, RootStackParamList} from '../../library/types';
import {
  addOrDeleteMovie,
  getMovieDetails,
} from '../../store/actions/movie.actions';
import {Screens} from '../../library/enums';

import HeartIcon from '../../res/icons/heart-icon';
import colors from '../../theme/color';

import styles from './styles';

type IProps = {
  route: RouteProp<RootStackParamList, typeof Screens.DETAIL_PAGE>;
};

// This component will change the layout when device orientation changes
const DetailScreen = ({route}: IProps) => {
  const {HEIGHT, WIDTH, orientation} = useDimension();
  const dispatch = useDispatch();
  const top = useSafeAreaInsets().top;
  const {
    params: {selectedMovie},
  } = route;

  const selectedMovies = useSelector(
    (state: Reducers) => state.movieReducer.selectedMovies,
  );
  const loadErrors = useSelector(
    (state: Reducers) => state.appStateReducer.loadingStatus.loadErrors,
  );
  const [movieDetails, setMovieDetails] = useState<Movie>();
  const hasErrors = Boolean(loadErrors?.[MOVIE_DETAILS(selectedMovie.id)]);

  const loadData = () =>
    dispatch(
      getMovieDetails(selectedMovie.id, (data: Movie) => setMovieDetails(data)),
    );

  useEffect(() => {
    loadData();
  }, [selectedMovie]);

  // memoizing values to stop re-render
  const isSaved = useMemo(
    () => selectedMovies?.filter(el => el?.id === selectedMovie?.id).length > 0,
    [selectedMovies, selectedMovie],
  );
  const {isPortrait} = useMemo(
    () => ({isPortrait: orientation === 'PORTRAIT'}),
    [orientation],
  );
  const imageStyles = useMemo(
    () => ({
      height: isPortrait ? HEIGHT * 0.5 : HEIGHT * 0.8,
      width: isPortrait ? WIDTH : WIDTH * 0.45,
      borderRadius: isPortrait ? 0 : 20,
    }),
    [isPortrait],
  );
  // memoizing values to stop re-render

  const onAdd = () => {
    const action = isSaved
      ? REMOVE_FROM_SELECTED_MOVIE
      : ADD_TO_SELECTED_MOVIES;
    dispatch(addOrDeleteMovie(action, movieDetails as Movie));
  };

  return (
    <ScreenContainer
      headerContainerStyles={[
        {
          top,
        },
        isPortrait ? styles.appheader : null,
      ]}
      withoutSafeArea={isPortrait}
      rightView={<HeartIcon fill={isSaved ? colors.darkRed : colors.white} />}
      titleText={isPortrait ? '' : DETAIL_SCREEN_HEADER}>
      <View>
        <View
          style={isPortrait ? null : [styles.row, styles.paddingHorizontal]}>
          <PosterComponent
            imageStyles={imageStyles}
            containerStyle={styles.posterComponentContaienr}
            customURI={IMAGE_URL + movieDetails?.backdrop_path}
            movie={movieDetails}
            hideText
          />
          {!hasErrors && (
            <MovieDetailComponent
              containerStyles={isPortrait ? null : styles.halfWidth}
              movie={movieDetails}
              onAdd={onAdd}
              isAlreadySaved={isSaved}
            />
          )}
        </View>
        {hasErrors && <EmptyDataView showReloadButton />}
      </View>
    </ScreenContainer>
  );
};

export default DetailScreen;
