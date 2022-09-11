import React from 'react';
import {FlatList} from 'react-native';

import {MovieText, PosterComponent} from '../../../components';
import {MovieTextTypes} from '../../../components/movie-text';

import {Movie} from '../../../library/types';
import styles from '../styles';

const ListItem = ({
  section,
  onPress,
}: {
  section: {title: string; data: Array<Movie>; _id: number};
  onPress: (item: Movie) => void;
}) => {
  return (
    <>
      <MovieText
        type={MovieTextTypes.DEFAULT}
        textStyles={styles.titleText}
        text={section.title}
      />
      <FlatList
        data={section.data}
        horizontal
        keyExtractor={item => item.id?.toString()}
        renderItem={({item}) => (
          <PosterComponent
            containerStyle={styles.container}
            onPress={() => onPress(item)}
            movie={item}
          />
        )}
      />
    </>
  );
};

export default ListItem;
