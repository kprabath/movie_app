// 3 themes
// default,
import {ThemeObject} from '../library/types';
import {getScalenNumber} from '../library/utils';
import colors from './color';
import Fonts from './typography';

export const ThemeA: ThemeObject = {
  ui: {
    primaryButton: {
      backgroundColor: colors.darkerRed,
      padding: getScalenNumber(10),
      borderRadius: 40,
    },
  },
  colorPallete: colors,
  // will be using IBM Plex sans
  typoGraphy: {
    displayText: Fonts.IBMFonts.IBMPlexMono_Bold,
    titleLarge: Fonts.IBMFonts.IBMPlexMono_SemiBold,
    titleMedium: Fonts.IBMFonts.IBMPlexSans_Bold,
    titleSmall: Fonts.IBMFonts.IBMPlexSans_ExtraLight,
    paragraphLarge: Fonts.IBMFonts.IBMPlexMono_Thin,
    paragraphMedium: Fonts.IBMFonts.IBMPlexMono_Regular,
  },
};

export const ThemeB: ThemeObject = {
  // will be using  Lato
  ui: {
    primaryButton: {
      padding: getScalenNumber(10),
      backgroundColor: colors.darkRed,
    },
  },
  colorPallete: colors,
  typoGraphy: {
    displayText: Fonts.LatoFonts.Lato_Bold,
    titleLarge: Fonts.LatoFonts.Lato_Semibold,
    titleMedium: Fonts.LatoFonts.Lato_Black,
    paragraphLarge: Fonts.LatoFonts.Lato_Hairline,
    paragraphMedium: Fonts.LatoFonts.Lato_Medium,
    paragraphSmall: Fonts.LatoFonts.Lato_Regular,
  },
};

export const ThemeC: ThemeObject = {
  ui: {
    primaryButton: {
      borderRadius: 40,
      borderColor: colors.darkerRed,
      borderWidth: 1,
      padding: getScalenNumber(10),
    },
  },
  colorPallete: colors,
  // will be using San Serif
  typoGraphy: {
    displayText: Fonts.SansSerifFonts.ssd_bold,
    titleLarge: Fonts.SansSerifFonts.ssd_semiBold,
    titleMedium: Fonts.SansSerifFonts.ssd_extraBold,
    titleSmall: Fonts.SansSerifFonts.ssd_hairline,
    paragraphLarge: Fonts.SansSerifFonts.ss_book,
    paragraphSmall: Fonts.SansSerifFonts.ss_book,
  },
};
