import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const HeartSvg: React.FC = () => {
    return (
        <Svg width={14} height={13} fill="none">
            <Path
                d="M12.172 2.049a3.158 3.158 0 0 0-4.467 0l-.608.608-.609-.608a3.158 3.158 0 1 0-4.466 4.466l.609.609 4.466 4.466 4.466-4.466.609-.609a3.159 3.159 0 0 0 0-4.466v0Z"
                stroke="#666"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default HeartSvg;
