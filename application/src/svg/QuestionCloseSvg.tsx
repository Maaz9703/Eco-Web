import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const QuestionCloseSvg: React.FC = () => {
    return (
        <Svg width={11} height={6} fill="none">
            <G clipPath="url(#a)">
                <Path
                    d="m.857.857 4.286 4.286L9.429.857"
                    stroke="#222"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill="#fff"
                        transform="matrix(0 -1 -1 0 10.143 5.857)"
                        d="M0 0h5.714v10H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default QuestionCloseSvg;
