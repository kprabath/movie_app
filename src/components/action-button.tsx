import React, {ReactElement} from 'react';
import {
  StyleProp,
  Pressable,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';

import MovieText, {MovieTextTypes} from './movie-text';

import useStyles from '../hooks/use-style';
import colors from '../theme/color';
import {getScalenNumber} from '../library/utils';

export type ButtonType = 'Primary' | 'Default' | 'Secondary' | 'Skeleton';
export type ActionButtonProps = {
  children?: ReactElement | ReactElement[];
  customStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  buttonType?: ButtonType;
  text?: string;
  textStyles?: StyleProp<TextStyle>;
  textType?: MovieTextTypes;
  testId?: string;
};

const ActionButton = ({
  children,
  customStyles,
  onPress,
  disabled,
  buttonType,
  text,
  textStyles,
  textType,
  testId,
}: ActionButtonProps) => {
  const {theme} = useStyles();
  // get styles for different buttons
  const getStyle = () => {
    if (!buttonType) {
      return theme.ui?.primaryButton;
    }
    switch (buttonType) {
      case 'Primary':
        return styles.primaryButton;
      case 'Secondary':
        return styles.secondary;
      case 'Skeleton':
        return styles.skeleton;
      default:
        return null;
    }
  };
  return (
    <Pressable
      disabled={disabled}
      testID={testId}
      onPress={onPress}
      style={[styles.container, customStyles, getStyle()]}>
      {text && (
        <MovieText
          type={textType}
          textStyles={[styles.text, textStyles]}
          text={text}
        />
      )}
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getScalenNumber(10),
  },
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: colors.darkerRed,
    padding: 10,
    borderRadius: 40,
  },
  skeleton: {
    borderRadius: 40,
    borderColor: colors.darkerRed,
    borderWidth: 1,
    padding: getScalenNumber(10),
  },
  secondary: {
    padding: getScalenNumber(10),
    backgroundColor: colors.darkRed,
  },
});

export default ActionButton;
