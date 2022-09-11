import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {getScalenNumber} from '../../library/utils';

import colors from '../../theme/color';

const HeartIcon = (props: SvgProps) => (
  <Svg
    height={getScalenNumber(24)}
    width={getScalenNumber(24)}
    viewBox="0 0 30 30"
    {...props}>
    <Path
      d="M7 3c-1.536 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.535 3 7 3z"
      fill={props.fill ?? colors.white}
    />
  </Svg>
);

export default HeartIcon;
