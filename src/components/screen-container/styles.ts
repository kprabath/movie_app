import {StyleSheet} from 'react-native';

import {getScalenNumber} from '../../library/utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: getScalenNumber(60),
    justifyContent: 'space-between',
    paddingHorizontal: getScalenNumber(10),
  },
  rightView: {
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  zIndex1: {
    zIndex: 10,
  },
  mainContainer: {
    flex: 1,
  },
  titleStyle: {
    fontSize: getScalenNumber(24),
  },
});

export default styles;
