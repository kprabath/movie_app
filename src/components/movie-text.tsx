import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import useStyles from '../hooks/use-style';
import {getScalenNumber} from '../library/utils';
import colors from '../theme/color';

import RichText from './rich-text';

type IProps = {
  textStyles?: StyleProp<TextStyle>;
  text: string;
  isRichText?: boolean;
  richTextStyles?: {
    p1?: StyleProp<TextStyle>;
    p2?: StyleProp<TextStyle>;
  };
  openTag?: string;
  closeTag?: string;
  textLength?: number;
  type?: MovieTextTypes;
};
const MovieText = ({
  textStyles,
  text,
  isRichText,
  openTag,
  closeTag,
  textLength,
  richTextStyles,
  type = MovieTextTypes.DEFAULT,
}: IProps) => {
  const {theme} = useStyles();

  // get styles for different mobile MovieTextTypes
  const getStyles = () => {
    switch (type) {
      // checking font type and mapping styles
      case MovieTextTypes.EXTRA_LARGE:
        return {
          fontSize: getScalenNumber(28),
          fontFamily: theme?.typoGraphy?.displayText,
        };
      case MovieTextTypes.DISPLAY_TEXT:
        return {
          fontSize: getScalenNumber(24),
          fontFamily: theme?.typoGraphy?.displayText,
        };
      case MovieTextTypes.H1:
        return {
          fontSize: getScalenNumber(22),
          fontFamily: theme?.typoGraphy?.titleLarge,
        };
      case MovieTextTypes.H2:
        return {
          fontSize: getScalenNumber(20),
          fontFamily: theme?.typoGraphy?.titleMedium,
        };
      case MovieTextTypes.H3:
        return {
          fontSize: getScalenNumber(18),
          fontFamily: theme?.typoGraphy?.titleSmall,
        };
      case MovieTextTypes.P1:
        return {
          fontSize: getScalenNumber(16),
          fontFamily: theme?.typoGraphy?.paragraphLarge,
        };
      case MovieTextTypes.P2:
        return {
          fontSize: getScalenNumber(13),
          fontFamily: theme?.typoGraphy?.paragraphMedium,
        };
      case MovieTextTypes.P3:
        return {
          fontSize: getScalenNumber(12),
          fontFamily: theme?.typoGraphy?.paragraphSmall,
        };
      case MovieTextTypes.DEFAULT:
      default:
        return styles.defaultText;
    }
  };

  const derivedText =
    text?.length < (textLength as number) || !textLength
      ? text
      : text.slice(0, textLength);

  if (isRichText) {
    return (
      <Text>
        <RichText
          openTag={openTag as string}
          closeTag={closeTag as string}
          render={(p1, p2) => (
            <>
              <MovieText
                type={type}
                textStyles={[richTextStyles?.p1, textStyles]}
                text={p1}
              />
              <MovieText
                type={type}
                textStyles={[richTextStyles?.p2, textStyles]}
                text={p2}
              />
            </>
          )}>
          {derivedText}
        </RichText>
      </Text>
    );
  }
  return (
    <Text style={[styles.generalText, getStyles(), textStyles]}>
      {derivedText}
    </Text>
  );
};

export enum MovieTextTypes {
  EXTRA_LARGE = 'EXTRA_LARGE',
  DEFAULT = 'DEFAULT', // 14
  DISPLAY_TEXT = 'DISPLAY_TEXT', //24
  H1 = 'H1', // 22
  H2 = 'H2', // 20
  H3 = 'H3', // 18
  P1 = 'P1', // 16
  P2 = 'P2', // 13
  P3 = 'P3', // 12
}

const styles = StyleSheet.create({
  generalText: {
    color: colors.white,
  },
  defaultText: {
    fontSize: getScalenNumber(14),
  },
});

export default MovieText;
