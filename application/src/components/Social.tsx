import { View, TouchableOpacity } from "react-native";
import { svg } from "../svg";
import React from "react";

const Social: React.FC = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30,
            }}
        >
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <svg.FacebookSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <svg.TwitterSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <svg.GoogleSvg />
            </TouchableOpacity>
        </View>
    );
};

export default Social;
