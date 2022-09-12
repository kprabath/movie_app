import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {getScalenNumber} from '../library/utils';
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
    borderRadius: getScalenNumber(20),
    paddingHorizontal: getScalenNumber(10),
    minWidth: getScalenNumber(60),
    paddingVertical: getScalenNumber(5),
    alignItems: 'center',
    marginRight: getScalenNumber(10),
    marginVertical: getScalenNumber(5),
  },
  fontWeight: {
    fontWeight: '700',
  },
});

export default ChipItem;
