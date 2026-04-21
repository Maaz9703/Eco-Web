import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NewCardPlusSvg: React.FC = () => {
    return (
        <Svg width={22} height={22} fill="none">
            <Path
                d="M11 4.583v12.834M4.624 11h12.752"
                stroke="#222"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default NewCardPlusSvg;
