import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const PromocodeEmptySvg: React.FC = () => {
    return (
        <Svg width={100} height={100} fill="none">
            <Rect width={100} height={100} rx={50} fill="#D05278" />
            <Path
                d="M60.747 39.258a4.56 4.56 0 0 1-.236-6.194.378.378 0 0 0-.022-.513l-4.31-4.315a.38.38 0 0 0-.536 0l-6.87 6.87a2.308 2.308 0 0 0-.557.902 2.31 2.31 0 0 1-1.46 1.464c-.34.114-.65.305-.904.558L28.236 55.642a.38.38 0 0 0 0 .538l4.31 4.31a.378.378 0 0 0 .514.02 4.56 4.56 0 0 1 6.43 6.43.378.378 0 0 0 .02.514l4.31 4.31a.38.38 0 0 0 .537 0l17.618-17.617c.253-.253.444-.563.557-.903a2.31 2.31 0 0 1 1.46-1.465c.34-.113.65-.304.902-.557l6.87-6.87a.38.38 0 0 0 0-.537l-4.31-4.31a.378.378 0 0 0-.514-.02 4.56 4.56 0 0 1-6.193-.227Z"
                stroke="#fff"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="m49.463 38.715-1.612-1.613m5.91 5.912-1.075-1.075m5.374 5.374-1.074-1.075m5.912 5.911-1.613-1.612"
                stroke="#fff"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    );
};

export default PromocodeEmptySvg;
