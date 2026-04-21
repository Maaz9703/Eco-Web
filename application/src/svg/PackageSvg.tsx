import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const PackageSvg: React.FC = () => {
    return (
        <Svg width={70} height={70} fill="none">
            <Rect width={70} height={70} rx={35} fill="#D05278" />
            <Path
                d="m40.625 31.75-11.25-6.488M46.25 40V30A2.5 2.5 0 0 0 45 27.837l-8.75-5a2.5 2.5 0 0 0-2.5 0l-8.75 5A2.5 2.5 0 0 0 23.75 30v10A2.5 2.5 0 0 0 25 42.162l8.75 5a2.5 2.5 0 0 0 2.5 0l8.75-5A2.5 2.5 0 0 0 46.25 40Z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M24.087 28.7 35 35.013 45.912 28.7M35 47.6V35"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default PackageSvg;
