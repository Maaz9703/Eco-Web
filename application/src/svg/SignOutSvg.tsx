import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";

const SignOutSvg: React.FC = () => {
    return (
        <Svg width={90} height={90} fill="none">
            <G>
                <Rect
                    x={10}
                    y={6}
                    width={70}
                    height={70}
                    rx={35}
                    fill="#D05278"
                />
                <Path
                    d="M41.25 52.25h-5a2.5 2.5 0 0 1-2.5-2.5v-17.5a2.5 2.5 0 0 1 2.5-2.5h5M50 47.25 56.25 41 50 34.75M56.25 41h-15"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs></Defs>
        </Svg>
    );
};

export default SignOutSvg;
