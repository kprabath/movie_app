import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {getScalenNumber} from '../library/utils';

import MovieText, {MovieTextTypes} from './movie-text';

type IProps = {
  titleText?: string;
  subtitleText?: string;
  titleStyles?: StyleProp<ViewStyle>;
  subtitleStyle?: StyleProp<ViewStyle>;
  subtitleView?: ReactElement;
  titleView?: ReactElement;
};

const TitleSubtitle = ({
  titleText,
  subtitleText,
  titleView,
  subtitleView,
  titleStyles,
  subtitleStyle,
}: IProps) => (
  <View>
    {titleView || (
      <MovieText
        text={titleText as string}
        type={MovieTextTypes.H3}
        textStyles={[styles.titleText, titleStyles]}
      />
    )}
    {subtitleView || (
      <MovieText
        type={MovieTextTypes.P2}
        text={subtitleText as string}
        textStyles={[subtitleStyle]}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    marginBottom: getScalenNumber(5),
    fontWeight: '700',
  },
});

export default TitleSubtitle;
