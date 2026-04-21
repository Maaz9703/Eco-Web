import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../constants";
import { svg } from "../svg";

type Props = {
    title: string;
    onPress?: () => void;
    containerStyle?: any;
};

const ProductCategory: React.FC<Props> = ({
    title,
    onPress,
    containerStyle,
}) => {
    return (
        <View
            style={{
                borderBottomWidth: 2,
                paddingBottom: 10,
                marginBottom: 18,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                ...containerStyle,
            }}
        >
            <Text style={{ ...theme.FONTS.H3, color: theme.COLORS.black }}>
                {title}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <svg.ViewAllSvg />
            </TouchableOpacity>
        </View>
    );
};

export default ProductCategory;
