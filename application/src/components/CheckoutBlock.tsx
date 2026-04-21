import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../constants";

type Props = {
    children: React.ReactNode;
    leftContent: string;
    rightContent?: string | JSX.Element;
    onPress?: () => void;
};

const CheckoutBlock: React.FC<Props> = ({
    children,
    leftContent,
    rightContent,
    onPress,
}) => {
    return onPress ? (
        <TouchableOpacity
            style={{
                width: "100%",
                backgroundColor: "#FAF9FF",
                padding: 20,
                borderWidth: 1,
                borderColor: "#EEEEEE",
                marginBottom: 8,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 2,
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.H6,
                        color: theme.COLORS.black,
                        paddingBottom: 11,
                    }}
                >
                    {leftContent}
                </Text>
                <Text
                    style={{
                        ...theme.FONTS.H6,
                        color: theme.COLORS.black,
                        paddingBottom: 11,
                    }}
                >
                    {rightContent}
                </Text>
            </View>
            {children}
        </TouchableOpacity>
    ) : (
        <View
            style={{
                width: "100%",
                backgroundColor: "#FAF9FF",
                padding: 20,
                borderWidth: 1,
                borderColor: "#EEEEEE",
                marginBottom: 8,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 2,
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.H6,
                        color: theme.COLORS.black,
                        paddingBottom: 11,
                    }}
                >
                    {leftContent}
                </Text>
                <Text
                    style={{
                        ...theme.FONTS.H6,
                        color: theme.COLORS.black,
                        paddingBottom: 11,
                    }}
                >
                    {rightContent}
                </Text>
            </View>
            {children}
        </View>
    );
};

export default CheckoutBlock;
