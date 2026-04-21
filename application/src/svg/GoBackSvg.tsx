import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GoBackSvg: React.FC = () => {
    return (
        <Svg width={8} height={14} fill="none">
            <Path
                d="M7 13 1 7l6-6"
                stroke="#222"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default GoBackSvg;
