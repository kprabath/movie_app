import {StyleSheet} from 'react-native';
import {getScalenNumber} from '../../library/utils';

const styles = StyleSheet.create({
  appheader: {
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 10,
  },
  displayText: {
    fontSize: getScalenNumber(28),
  },
  row: {
    flexDirection: 'row',
  },
  paddingHorizontal: {
    paddingHorizontal: getScalenNumber(28),
  },
  halfWidth: {
    width: '50%',
  },
  posterComponentContaienr: {
    paddingHorizontal: 0,
  },
});

export default styles;
