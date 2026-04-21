import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const ProductLikeSvg: React.FC = () => {
    return (
        <Svg width={50} height={50} fill="none">
            <Rect
                x={0.5}
                y={0.5}
                width={49}
                height={49}
                rx={24.5}
                fill="#fff"
            />
            <Path
                d="M32.367 18.842a4.584 4.584 0 0 0-6.484 0l-.883.883-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L25 32.692l6.483-6.484.884-.883a4.582 4.582 0 0 0 0-6.483v0Z"
                stroke="#666"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Rect
                x={0.5}
                y={0.5}
                width={49}
                height={49}
                rx={24.5}
                stroke="#EEE"
            />
        </Svg>
    );
};

export default ProductLikeSvg;
