import {Dimensions} from 'react-native';

import {Genre} from './enums';

export const getRandomGenres = (list: Array<{id: number; name: Genre}>) => {
  return list.sort(() => 0.6 - Math.random()).slice(0, 3);
};

export const toPrecision = (value: string | number, precision: number = 1) => {
  if (isNaN(value as number)) {
    return 0;
  }
  return parseFloat(value as string).toPrecision(precision);
};

export const getScalenNumber = (size: number) => {
  // based on the iphone 8 scale
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const dimesion = Math.min(screenHeight, screenWidth);
  const dpi = Math.round(dimesion / 375);
  if (dpi >= 2) {
    return ((size * dpi) / 4) * size;
  }
  return size;
};
