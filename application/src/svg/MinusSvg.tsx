import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MinusSvg: React.FC = () => {
    return (
        <Svg width={14} height={14} fill="none">
            <Path
                d="M3 7h8.114"
                stroke="#222"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default MinusSvg;
