import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path} from 'react-native-svg';
import {getScalenNumber} from '../../library/utils';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const StarIcon = (props: SvgProps) => (
  <Svg
    width={getScalenNumber(24)}
    height={getScalenNumber(24)}
    fill="none"
    {...props}
    viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={3} fill="#BBB" />
    <G filter="url(#a)">
      <Path
        d="m17.612 10.042-3.597-.524-1.608-3.265a.455.455 0 0 0-.813 0L9.984 9.518l-3.597.524a.452.452 0 0 0-.388.455c.002.12.05.236.137.32l2.603 2.541-.615 3.59a.454.454 0 0 0 .657.478L12 15.73l3.218 1.695a.453.453 0 0 0 .657-.478l-.615-3.59 2.603-2.541a.453.453 0 0 0-.25-.775Z"
        fill="#BBB"
      />
    </G>
  </Svg>
);

export default StarIcon;
