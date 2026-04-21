import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { showMessage } from "react-native-flash-message";

import { theme } from "../constants";
import { svg } from "../svg";

type Props = {
    item: any;
};

const CustomStatusBar: React.FC<Props> = ({ item }) => {
    return (
        <TouchableOpacity
            style={{
                width: "48.2%",
                backgroundColor: theme.COLORS.white,
                borderWidth: 1,
                borderColor: "#EEEEEE",
                padding: 10,
                marginBottom: 15,
            }}
            onPress={() =>
                showMessage({
                    message: "Success",
                    description: `${item.code} was copied to clipboard`,
                    type: "success",
                })
            }
        >
            <View style={{ marginBottom: 14 }}>
                <svg.DiscountSvg />
            </View>
            <Text
                style={{
                    ...theme.FONTS.H5,
                    color: theme.COLORS.black,
                    marginBottom: 2,
                }}
            >
                {item.name}
            </Text>
            <Text
                style={{
                    ...theme.FONTS.Lato_400Regular,
                    fontSize: 16,
                    lineHeight: 16 * 1.7,
                    color: item.color,
                    marginBottom: 2,
                }}
            >
                {item.discount}
            </Text>
            <Text
                style={{
                    ...theme.FONTS.Lato_400Regular,
                    fontSize: 12,
                    color: theme.COLORS.gray,
                    lineHeight: 12 * 1.5,
                    marginBottom: 16,
                }}
            >
                Valid until {item.valid}
            </Text>
            <View
                style={{
                    width: "100%",
                    backgroundColor: "#FAF9FF",
                    borderWidth: 1,
                    borderColor: "#EEEEEE",
                    padding: 10,
                    paddingVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.Lato_700Bold,
                        fontSize: 8,
                        textTransform: "uppercase",
                        color: theme.COLORS.gray,
                    }}
                >
                    {item.code}
                </Text>
                <svg.CopySvg />
            </View>
        </TouchableOpacity>
    );
};

export default CustomStatusBar;
