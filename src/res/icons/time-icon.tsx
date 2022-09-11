import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const TimeIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" viewBox="0 0 14 14" {...props}>
    <Path
      d="M7 1C3.687 1 1 3.688 1 7c0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6Z"
      stroke="#BBB"
      strokeMiterlimit={10}
    />
    <Path
      d="M7 3v4.5h3"
      stroke="#BBB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TimeIcon;
