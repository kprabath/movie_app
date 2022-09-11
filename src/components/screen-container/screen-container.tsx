import React, {ReactElement, useMemo} from 'react';
import {View, ScrollView, StyleProp, ViewStyle, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import navigationService from '../../navigation/navigation-service';

import BackIcon from '../../res/icons/back-icon';
import colors from '../../theme/color';
import ActionButton, {ActionButtonProps} from '../action-button';
import MovieText from '../movie-text';

import AppHeader, {AppHeaderProps} from './app-header';
import styles from './styles';
type IProps = AppHeaderProps & {
  withoutSafeArea?: boolean;
  removScrollView?: boolean;
  children: ReactElement | ReactElement[];
  screenChildStyles?: StyleProp<ViewStyle>;
  withoutBackButton?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  titleText?: string;
  hiderHeader?: boolean;
  headerContainerStyles?: StyleProp<ViewStyle>;
  actionButtonProps?: ActionButtonProps;
};

const ScreenContainer = ({
  withoutSafeArea,
  removScrollView,
  children,
  screenChildStyles,
  withoutBackButton,
  leftView,
  rightView,
  middleView,
  rightViewStyle,
  leftViewStyles,
  middleViewStyle,
  titleStyle,
  titleText,
  hiderHeader,
  headerContainerStyles,
  actionButtonProps,
}: IProps) => {
  const {top, bottom} = useSafeAreaInsets();
  const safeAreaStyle = useMemo(
    () => ({
      paddingTop: withoutSafeArea ? 0 : top,
      paddingBottom: withoutSafeArea ? 0 : bottom,
    }),
    [bottom, top, withoutSafeArea],
  );

  const onBackPress = () => navigationService.pop();

  return (
    <LinearGradient
      colors={[colors.primaryColor, colors.secondaryColor]}
      style={[styles.mainContainer, safeAreaStyle]}>
      {!hiderHeader && (
        <AppHeader
          containerStyle={headerContainerStyles}
          leftView={
            (withoutBackButton ? (
              leftView
            ) : (
              <ActionButton onPress={onBackPress} {...actionButtonProps}>
                <BackIcon />
              </ActionButton>
            )) as ReactElement
          }
          rightView={rightView as ReactElement}
          middleView={
            middleView ?? (
              <MovieText
                textStyles={[styles.titleStyle, titleStyle]}
                text={titleText as string}
              />
            )
          }
          rightViewStyle={rightViewStyle}
          leftViewStyles={leftViewStyles}
          middleViewStyle={middleViewStyle}
        />
      )}
      {removScrollView ? (
        <View style={[styles.mainContainer, screenChildStyles]}>
          {children}
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[screenChildStyles]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default ScreenContainer;
