import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const EditSvg: React.FC = () => {
    return (
        <Svg width={40} height={40} fill="none">
            <Rect
                x={0.5}
                y={0.5}
                width={39}
                height={39}
                rx={19.5}
                fill="#fff"
            />
            <Path
                d="M20 25.333h6M23 14.333a1.414 1.414 0 0 1 2 2l-8.333 8.334-2.667.666.667-2.666L23 14.333Z"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Rect
                x={0.5}
                y={0.5}
                width={39}
                height={39}
                rx={19.5}
                stroke="#EEE"
            />
        </Svg>
    );
};

export default EditSvg;
