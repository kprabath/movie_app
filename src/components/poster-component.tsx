import React, {ReactElement} from 'react';
import {
  Image,
  ImageStyle,
  ImageURISource,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import ActionButton from './action-button';
import MovieText from './movie-text';

import {IMAGE_URL} from '../library/config';
import {Movie} from '../library/types';
import Fonts from '../theme/typography';
import {getScalenNumber} from '../library/utils';

type IProps = {
  movie?: Movie;
  customURI?: ImageURISource['uri'];
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  imageStyles?: StyleProp<ImageStyle>;
  hideText?: boolean;
  onPress?: () => void;
  children?: ReactElement;
};

const PosterComponent = ({
  movie,
  onPress,
  hideText,
  imageStyles,
  customURI,
  containerStyle,
  children,
}: IProps) => {
  return (
    <ActionButton
      onPress={onPress}
      disabled={!onPress}
      buttonType="Default"
      customStyles={[style.conatiner, containerStyle]}>
      <Image
        style={[style.imageStyle, imageStyles]}
        source={{uri: customURI ?? IMAGE_URL + movie?.poster_path}}
      />
      <>
        {!hideText && <MovieText textStyles={style.text} text={movie?.title} />}
      </>
      {children as ReactElement}
    </ActionButton>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    height: getScalenNumber(250),
    width: '100%',
    marginBottom: getScalenNumber(10),
    borderRadius: 20,
  },
  conatiner: {
    paddingHorizontal: getScalenNumber(10),
  },
  text: {
    fontFamily: Fonts.LatoFonts.Lato_Semibold,
  },
});

export default PosterComponent;
