import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckoutArrowSvg: React.FC = () => {
    return (
        <Svg width={6} height={10} fill="none">
            <Path
                d="m1 9 4-4-4-4"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default CheckoutArrowSvg;
