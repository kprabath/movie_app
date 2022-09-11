import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useSelector} from 'react-redux';

import {
  ScreenContainer,
  MovieCard,
  ActionButton,
  EmptyDataView,
} from '../../components';

import {Movie, Reducers} from '../../library/types';
import navigationService from '../../navigation/navigation-service';
import {Screens} from '../../library/enums';

import styles from './style';

const WhistListScreen = () => {
  const movies = useSelector(
    (state: Reducers) => state.movieReducer.selectedMovies,
  );

  const onPress = (item: Movie) =>
    navigationService.navigate(Screens.DETAIL_PAGE, {selectedMovie: item});

  const renderItem = ({item}: ListRenderItemInfo<Movie>) => (
    <ActionButton
      buttonType="Default"
      onPress={() => onPress(item)}
      customStyles={styles.actionContainer}>
      <MovieCard movie={item} />
    </ActionButton>
  );

  return (
    <ScreenContainer
      titleText="Saved Items"
      removScrollView
      titleStyle={styles.textStyles}
      actionButtonProps={{buttonType: 'Default'}}>
      {movies.length > 0 ? (
        <FlatList data={movies} renderItem={renderItem} />
      ) : (
        <EmptyDataView description="No Saved Data" />
      )}
    </ScreenContainer>
  );
};

export default WhistListScreen;
