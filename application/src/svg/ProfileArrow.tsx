import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileArrow: React.FC = () => {
    return (
        <Svg width={8} height={12} fill="none">
            <Path
                d="M1.2 10.8 6 6 1.2 1.2"
                stroke="#222"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ProfileArrow;
