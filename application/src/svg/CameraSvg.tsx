import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const CameraSvg: React.FC = () => (
    <Svg width={60} height={60} fill="none">
        <G>
            <Rect x={10} y={6} width={40} height={40} rx={20} fill="#fff" />
            <G
                clipPath="url(#b)"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M37.333 30.667A1.333 1.333 0 0 1 36 32H24a1.333 1.333 0 0 1-1.333-1.333v-7.334A1.333 1.333 0 0 1 24 22h2.667L28 20h4l1.333 2H36a1.333 1.333 0 0 1 1.333 1.333v7.334Z" />
                <Path d="M30 29.333A2.667 2.667 0 1 0 30 24a2.667 2.667 0 0 0 0 5.333Z" />
            </G>
        </G>
        <Defs>
            <ClipPath id="b">
                <Path
                    fill="#fff"
                    transform="translate(22 18)"
                    d="M0 0h16v16H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default CameraSvg;
