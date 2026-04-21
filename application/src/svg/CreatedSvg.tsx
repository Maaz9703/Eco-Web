import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";

const Created: React.FC = () => {
    return (
        <Svg width={120} height={120} fill="none">
            <G>
                <Rect
                    x={10}
                    y={6}
                    width={100}
                    height={100}
                    rx={50}
                    fill="#D05278"
                />
                <Path
                    d="M55 41a6.25 6.25 0 1 1 0 12.5A6.25 6.25 0 0 1 55 41Zm0-2.5A8.75 8.75 0 1 0 55 56a8.75 8.75 0 0 0 0-17.5Zm12.5 36.25a1.25 1.25 0 1 1-2.5 0v-5a6.25 6.25 0 0 0-6.25-6.25h-7.5A6.25 6.25 0 0 0 45 69.75v5a1.25 1.25 0 1 1-2.5 0v-5A8.75 8.75 0 0 1 51.25 61h7.5a8.75 8.75 0 0 1 8.75 8.75v5Zm1.378-20.87a1.237 1.237 0 0 0-1.744 1.754l3.75 3.75a.519.519 0 0 0 .733 0l7.502-7.503a1.246 1.246 0 0 0-1.763-1.762l-5.865 5.865a.343.343 0 0 1-.483.002l-2.13-2.106Z"
                    fill="#fff"
                />
            </G>
            <Defs></Defs>
        </Svg>
    );
};

export default Created;
