import {StyleSheet} from 'react-native';

import {getScalenNumber} from '../../library/utils';
import Fonts from '../../theme/typography';

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: Fonts.IBMFonts.IBMPlexMono_Bold,
  },
  emptyContainer: {
    zIndex: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDataText: {
    fontSize: getScalenNumber(20),
    fontFamily: Fonts.LatoFonts.Lato_Semibold,
  },
  actionContainer: {
    paddingHorizontal: 0,
  },
});

export default styles;
