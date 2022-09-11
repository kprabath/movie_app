import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import colors from '../theme/color';

import MovieText, {MovieTextTypes} from './movie-text';

export type ChipItemProps = {
  text?: string;
  customStyles?: StyleProp<ViewStyle>;
  textType?: MovieTextTypes;
};

const ChipItem = ({text, customStyles, textType}: ChipItemProps) => (
  <View style={[styles.container, customStyles]}>
    <MovieText
      textStyles={styles.fontWeight}
      type={textType ?? MovieTextTypes.P3}
      text={text as string}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    width: undefined,
    borderRadius: 20,
    paddingHorizontal: 10,
    minWidth: 60,
    paddingVertical: 5,
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 5,
  },
  fontWeight: {
    fontWeight: '700',
  },
});

export default ChipItem;
