import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
    fillColor?: string;
    strokeColor: string;
    lineColor?: string;
};

const TrackElement: React.FC<Props> = ({
    fillColor,
    strokeColor,
    lineColor,
}) => {
    return (
        <Svg width={30} height={67} fill="none">
            <Circle
                cx={15}
                cy={15}
                r={14}
                stroke={strokeColor}
                strokeWidth={2}
            />
            {fillColor && <Circle cx={15} cy={15} r={6} fill={fillColor} />}

            {lineColor && (
                <Path
                    stroke={lineColor}
                    strokeLinecap="round"
                    strokeDasharray="2 4"
                    d="M15.5 37.5v29"
                />
            )}
        </Svg>
    );
};

export default TrackElement;
