import {StyleSheet} from 'react-native';

import {getScalenNumber} from '../../library/utils';
import Fonts from '../../theme/typography';

const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: Fonts.IBMFonts.IBMPlexSans_Bold,
    fontSize: getScalenNumber(24),
  },
  titleText: {
    fontFamily: Fonts.IBMFonts.IBMPlexMono_SemiBold,
    fontSize: getScalenNumber(20),
    margin: getScalenNumber(15),
  },
  container: {
    width: getScalenNumber(200),
  },
});

export default styles;
