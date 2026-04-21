import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrowSvg: React.FC = () => {
    return (
        <Svg width={12} height={22} fill="none">
            <Path
                d="M11 21 1 11 11 1"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default LeftArrowSvg;
