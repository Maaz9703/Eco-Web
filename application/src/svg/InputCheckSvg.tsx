import * as React from "react";
import Svg, { Path } from "react-native-svg";

const InputCheckSvg: React.FC = () => {
    return (
        <Svg width={14} height={10} fill="none">
            <Path
                d="M12.333 1 5 8.333 1.667 5"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default InputCheckSvg;
