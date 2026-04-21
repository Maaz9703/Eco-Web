import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { svg } from "../svg";
import React from "react";

import { theme } from "../constants";

export type Props = {
    icon: JSX.Element;
    title: string;
    arrow?: boolean;
    onPress?: () => void;
    containerStyle?: any;
    textStyle?: any;
};

const ProfileCategory: React.FC<Props> = ({
    icon,
    title,
    arrow = true,
    onPress,
    containerStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                height: 50,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#FAF9FF",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#EEEEEE",
                    marginRight: 14,
                }}
            >
                {icon}
            </View>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        ...theme.FONTS.H5,
                        textTransform: "capitalize",
                        ...textStyle,
                    }}
                >
                    {title}
                </Text>
            </View>
            {arrow && <svg.ProfileArrow />}
        </TouchableOpacity>
    );
};

export default ProfileCategory;
