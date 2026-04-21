import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TruckSvg: React.FC = () => {
    return (
        <Svg width={20} height={20} fill="none">
            <Path
                d="M13.333 2.5H.833v10.833h12.5V2.5ZM13.333 6.667h3.334l2.5 2.5v4.166h-5.834V6.667ZM4.583 17.5a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167ZM15.417 17.5a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
                stroke="#222"
                strokeWidth={1.35}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default TruckSvg;
