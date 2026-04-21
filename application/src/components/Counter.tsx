import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { theme } from "../constants";
import { svg } from "../svg";

type Props = {
    item: any;
};

const Counter: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { item: item },
        });
        showMessage({
            message: "Success",
            description: `${item.name} added to cart successfully!`,
            type: "success",
        });
    };

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { item: item },
        });
        showMessage({
            message: "Success",
            description: `${item.name} removed from cart successfully!`,
            type: "success",
        });
    };

    return (
        <View
            style={{
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
            }}
        >
            <TouchableOpacity
                onPress={() => addToCart()}
                style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#EEEEEE",
                }}
            >
                <svg.PlusSvg />
            </TouchableOpacity>
            <Text style={{ fontSize: 10, color: theme.COLORS.gray }}>
                {item.quantity}
            </Text>
            <TouchableOpacity
                onPress={() => removeFromCart()}
                style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#EEEEEE",
                }}
            >
                <svg.MinusSvg />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;
