import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useDimension = () => {
  const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('screen');
  const getOrientation = (h: number, w: number) =>
    h <= w ? 'LANDSCAPE' : 'PORTRAIT';

  const [dimension, setDimension] = useState({
    HEIGHT: SCREEN_HEIGHT,
    WIDTH: SCREEN_WIDTH,
    orientation: getOrientation(SCREEN_HEIGHT, SCREEN_WIDTH),
  });

  useEffect(() => {
    const listner = Dimensions.addEventListener('change', () => {
      const h = Dimensions.get('screen').height;
      const w = Dimensions.get('screen').width;
      setDimension({
        // accessing dimension to get orientation changes
        HEIGHT: h,
        WIDTH: w,
        orientation: getOrientation(h, w),
      });
    });
    return () => listner.remove();
  }, []);

  return dimension;
};

export default useDimension;
