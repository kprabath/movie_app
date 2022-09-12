import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {getScalenNumber} from '../../library/utils';

import Fonts from '../../theme/typography';
import ActionButton from '../action-button';

import MovieText, {MovieTextTypes} from '../movie-text';

type IProps = {
  description?: string;
  onReload?: () => void;
  showReloadButton?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const EmptyDataView = ({
  description = 'OOPS, SOMETHING’S NOT RIGHT',
  onReload,
  showReloadButton,
  containerStyle,
}: IProps) => (
  <View style={[styles.emptyContainer, containerStyle]}>
    <MovieText
      textStyles={[styles.emptyDataText, styles.text]}
      type={MovieTextTypes.DEFAULT}
      text={description as string}
    />
    {showReloadButton && (
      <ActionButton
        disabled
        onPress={onReload}
        customStyles={styles.actionContainer}>
        <MovieText
          textStyles={[styles.text]}
          type={MovieTextTypes.DEFAULT}
          text="Try reloading"
        />
      </ActionButton>
    )}
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.LatoFonts.Lato_Semibold,
  },
  emptyDataText: {
    fontSize: getScalenNumber(20),
  },
  actionContainer: {
    marginTop: getScalenNumber(10),
  },
});

export default EmptyDataView;
