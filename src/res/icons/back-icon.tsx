import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {getScalenNumber} from '../../library/utils';

import colors from '../../theme/color';

const BackIcon = (props: SvgProps) => (
  <Svg
    width={getScalenNumber(24)}
    height={getScalenNumber(24)}
    fill="none"
    {...props}
    viewBox="0 0 36 36">
    <Path
      d="M24.274 27.756c.963.962.963 2.52.032 3.515a2.36 2.36 0 0 1-1.733.729c-.61 0-1.22-.232-1.668-.73l-11.2-11.505A2.526 2.526 0 0 1 9 18.008c0-.663.257-1.293.706-1.757L20.905 4.746c.93-.995 2.438-.995 3.401 0 .93.962.93 2.553-.032 3.515l-9.466 9.747 9.466 9.748Z"
      fill={colors.white}
    />
  </Svg>
);

export default BackIcon;
