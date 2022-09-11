import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import MovieText, {MovieTextTypes} from './movie-text';

type IProps = {
  icon: ReactElement;
  text: string;
  textStyles?: StyleProp<TextStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const IconText = ({
  text,
  textStyles,
  icon,
  iconContainerStyle,
  containerStyle,
}: IProps) => (
  <View style={[styles.container, containerStyle]}>
    <View style={[styles.leftView, iconContainerStyle]}>{icon}</View>
    <MovieText type={MovieTextTypes.P3} text={text} textStyles={textStyles} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftView: {
    marginRight: 3,
  },
});
export default IconText;
