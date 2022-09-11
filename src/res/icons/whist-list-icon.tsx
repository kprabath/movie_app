import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {getScalenNumber} from '../../library/utils';

const WhistList = (props: SvgProps) => (
  <Svg
    width={getScalenNumber(15)}
    height={getScalenNumber(18)}
    fill="none"
    viewBox="0 0 15 18"
    {...props}>
    <Path
      d="M3 .9h9c1.16 0 2.1.94 2.1 2.1v12.864a.6.6 0 0 1-.976.467l-4.745-3.824a1.4 1.4 0 0 0-1.758 0L1.877 16.33a.6.6 0 0 1-.977-.467V3C.9 1.84 1.84.9 3 .9Z"
      stroke="#fff"
      strokeWidth={1.8}
    />
  </Svg>
);

export default WhistList;
