import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CopySvg: React.FC = () => {
    return (
        <Svg width={16} height={16} fill="none">
            <Path
                d="M13.333 6h-6C6.597 6 6 6.597 6 7.333v6c0 .737.597 1.334 1.333 1.334h6c.737 0 1.334-.597 1.334-1.334v-6c0-.736-.597-1.333-1.334-1.333Z"
                stroke="#666"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M3.333 10h-.666a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 1 1.334-1.333h6A1.333 1.333 0 0 1 10 2.667v.667"
                stroke="#666"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default CopySvg;
