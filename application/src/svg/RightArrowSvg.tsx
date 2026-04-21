import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const RightArrowSvg: React.FC = () => {
    return (
        <Svg width={12} height={22} fill="none">
            <Path
                d="m1 21 10-10L1 1"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default RightArrowSvg;
