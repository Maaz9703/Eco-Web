import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
    color?: string;
};

const StarSvg: React.FC<Props> = ({ color = "#CFC819" }) => {
    return (
        <Svg width={12} height={12} fill="none">
            <Path
                d="m6 1 1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1Z"
                fill={color}
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default StarSvg;
