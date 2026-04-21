import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FAQSvg: React.FC = () => {
    return (
        <Svg width={20} height={20} fill="none">
            <Path
                d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.575 7.5a2.5 2.5 0 0 1 4.858.833c0 1.667-2.5 2.5-2.5 2.5M10 14.167h.008"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default FAQSvg;
