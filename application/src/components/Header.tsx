import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../constants";
import { svg } from "../svg";

export type Props = {
    title?: any;
    containerStyle?: any;
    burger?: boolean;
    logo?: boolean;
    goBack?: boolean;
    bag?: boolean;
    search?: boolean;
    textStyle?: any;
};

const Header: React.FC<Props> = ({
    containerStyle,
    logo,
    bag,
    goBack,
    title,
    search,
    textStyle,
}: any) => {
    const navigation: any = useNavigation();

    const totalPrice = useSelector((state: any) => state.cart.totalPrice);
    const cartItems = useSelector((state: any) => state.cart.cartItems);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 47,
                ...containerStyle,
            }}
        >
            {logo && (
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        alignItems: "center",
                        paddingHorizontal: 20,
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <svg.LogoSvg />
                </View>
            )}
            {bag && (
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        height: "100%",
                        justifyContent: "center",
                        paddingLeft: 20,
                    }}
                    onPress={() =>
                        navigation.navigate("Tabs", { screen: "Order" })
                    }
                >
                    <View
                        style={{
                            paddingHorizontal: 20,
                            flexDirection: "row",
                            paddingVertical: 6,
                        }}
                    >
                        <svg.HeaderBasket />
                        <View
                            style={{
                                position: "absolute",
                                right: 35,
                                bottom: 3,
                                backgroundColor: theme.COLORS.accent,
                                borderRadius: 30,
                                zIndex: 2,
                            }}
                        >
                            <Text
                                style={{
                                    color: theme.COLORS.white,
                                    fontSize: 10,
                                    paddingHorizontal: 5,
                                    paddingVertical: 4,
                                    ...theme.FONTS.Lato_700Bold,
                                }}
                            >
                                $
                                {cartItems.length > 0
                                    ? totalPrice.toFixed(2)
                                    : 0}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {goBack && (
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <svg.GoBackSvg />
                    </TouchableOpacity>
                </View>
            )}
            {title && (
                <Text
                    style={{
                        textAlign: "center",
                        color: theme.COLORS.black,
                        ...theme.FONTS.H4,
                        textTransform: "capitalize",
                        ...textStyle,
                    }}
                >
                    {title}
                </Text>
            )}
            {search && <svg.SearchCategoriesSvg />}
        </View>
    );
};

export default Header;
