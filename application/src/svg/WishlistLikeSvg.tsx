import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WishlistLikeSvg: React.FC = () => {
    return (
        <Svg width={14} height={13} fill="none">
            <Path
                d="M12.172 2.049a3.157 3.157 0 0 0-4.467 0l-.608.609-.609-.609a3.158 3.158 0 0 0-4.466 4.466l.608.609 4.467 4.466 4.466-4.466.609-.609a3.155 3.155 0 0 0 0-4.466Z"
                fill="#D05278"
                stroke="#D05278"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default WishlistLikeSvg;
