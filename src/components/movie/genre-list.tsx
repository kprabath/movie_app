import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Genre} from '../../library/enums';
import ChipItem, {ChipItemProps} from '../chip-item';
import TitleSubtitle from '../title-subtitle';

type GenreListProps = {
  genres: Array<{id: number; name: Genre}>;
  chipItemProps?: ChipItemProps;
};

const GenreList = ({genres, chipItemProps}: GenreListProps) => (
  <TitleSubtitle
    titleText="Genres"
    subtitleView={
      <View style={[styles.chipContainer, styles.row]}>
        {genres?.map(el => (
          <ChipItem {...chipItemProps} key={el.id} text={el.name} />
        ))}
      </View>
    }
  />
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  chipContainer: {
    flexWrap: 'wrap',
  },
});

export default GenreList;
