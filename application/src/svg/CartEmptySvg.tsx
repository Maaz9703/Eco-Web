import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const CartEmptySvg: React.FC = () => {
    return (
        <Svg width={100} height={100} fill="none">
            <Rect width={100} height={100} rx={50} fill="#D05278" />
            <Path
                d="M39.038 64.275A1 1 0 0 0 40 65h20.133a1 1 0 0 0 .962-.725L64.888 51H35.246l3.792 13.275Zm15.609-4.44 1-6a1 1 0 1 1 1.973.33l-1 6a1 1 0 0 1-1.973-.33ZM49.067 54a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0v-6Zm-5.665-.986a1 1 0 0 1 1.151.822l1 6a1 1 0 0 1-1.973.328l-1-6a1 1 0 0 1 .822-1.15ZM66.133 45h-3.519l-7.7-9.625a1 1 0 0 0-1.561 1.25l6.7 8.375H40.08l6.7-8.375a1 1 0 0 0-1.562-1.25L37.52 45H34a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h32.133a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                fill="#fff"
            />
        </Svg>
    );
};

export default CartEmptySvg;
