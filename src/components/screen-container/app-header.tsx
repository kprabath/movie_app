import React, {ReactElement, useRef} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import useDimension from '../../hooks/dimension.hook';
import styles from './styles';

export type AppHeaderProps = {
  leftView?: ReactElement;
  middleView?: ReactElement;
  rightView?: ReactElement;
  leftViewStyles?: StyleProp<ViewStyle>;
  rightViewStyle?: StyleProp<ViewStyle>;
  middleViewStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const AppHeader = ({
  leftView,
  rightView,
  middleView,
  leftViewStyles,
  rightViewStyle,
  middleViewStyle,
  containerStyle,
}: AppHeaderProps) => {
  const {WIDTH} = useDimension();
  const LRsize = useRef(WIDTH * 0.25);
  const Msize = useRef(WIDTH * 0.5);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          {
            maxWidth: LRsize.current,
          },
          styles.row,
          styles.zIndex1,
          styles.alignJustifyCenter,
          leftViewStyles,
        ]}>
        {leftView}
      </View>
      <View style={[StyleSheet.absoluteFill, styles.alignJustifyCenter]}>
        <View
          style={[
            {
              maxWidth: Msize.current,
            },
            styles.alignJustifyCenter,
            middleViewStyle,
          ]}>
          {middleView}
        </View>
      </View>
      <View
        style={[
          {
            maxWidth: LRsize.current,
          },
          styles.rightView,
          styles.row,
          styles.alignJustifyCenter,
          styles.zIndex1,
          rightViewStyle,
        ]}>
        {rightView}
      </View>
    </View>
  );
};

export default AppHeader;
