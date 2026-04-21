import { View, Text } from "react-native";
import React from "react";

import { theme } from "../constants";

type Props = {
    leftContent: string;
    rightContent?: string | JSX.Element;
    containerStyle?: any;
    textStyle?: any;
};

const CheckoutDetails: React.FC<Props> = ({
    leftContent,
    rightContent,
    containerStyle,
    textStyle,
}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                ...containerStyle,
            }}
        >
            <Text
                style={{
                    ...theme.FONTS.Lato_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray,
                    lineHeight: 14 * 1.5,
                }}
                numberOfLines={1}
            >
                {leftContent}
            </Text>
            <Text
                style={{
                    ...theme.FONTS.Lato_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray,
                    lineHeight: 14 * 1.5,
                    ...textStyle,
                }}
            >
                {rightContent}
            </Text>
        </View>
    );
};

export default CheckoutDetails;
