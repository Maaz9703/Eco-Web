import { Text, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../constants";

export type Props = {
    title: string;
    onPress?: () => void;
    containerStyle?: any;
    textStyle?: any;
};

const Button: React.FC<Props> = ({
    title,
    onPress,
    containerStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.COLORS.black,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color: theme.COLORS.white,
                    textTransform: "uppercase",
                    fontSize: 14,
                    ...theme.FONTS.Lato_400Regular,
                    ...textStyle,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
