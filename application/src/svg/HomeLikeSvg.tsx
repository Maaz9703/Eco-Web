import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const HomeLikeSvg: React.FC = () => {
    return (
        <Svg width={40} height={40} fill="none">
            <Circle cx={20} cy={20} r={19.5} fill="#fff" stroke="#FCEDEA" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.321 15.258a3.383 3.383 0 0 1 3.688 5.518l-4.673 4.673a.476.476 0 0 1-.672 0l-4.673-4.673a3.383 3.383 0 1 1 4.785-4.785l.224.224.224-.224a3.382 3.382 0 0 1 1.097-.733Zm1.295.693a2.43 2.43 0 0 0-1.72.713l-.56.56a.476.476 0 0 1-.672 0l-.56-.56a2.432 2.432 0 0 0-3.44 3.44L20 24.44l4.336-4.337a2.433 2.433 0 0 0 0-3.439 2.433 2.433 0 0 0-1.72-.713Z"
                fill="#222"
            />
        </Svg>
    );
};

export default HomeLikeSvg;
