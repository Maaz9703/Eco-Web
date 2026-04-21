import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";

import { components } from "../components";
import { theme, products } from "../constants";
import { svg } from "../svg";

const Wishlist: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();

    const addToCart = (item: any) => {
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

    const renderStatusBar = () => {
        return (
            <StatusBar
                animated={true}
                backgroundColor={theme.COLORS.pastel}
                barStyle={"dark-content"}
            />
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="Wishlist"
                logo={true}
                bag={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 17,
                    paddingBottom: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {products.map((item: any, index, array) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderWidth: 1,
                                borderColor: "#EEEEEE",
                                marginBottom: item === array.length - 1 ? 0 : 8,
                                height: 100,
                                padding: 10,
                                backgroundColor: theme.COLORS.white,
                            }}
                            onPress={() =>
                                navigation.navigate("Product", { item: item })
                            }
                        >
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={{
                                    width: 80,
                                    height: "100%",
                                    marginRight: 14,
                                }}
                            >
                                {item.promo_categories.includes("Sale") && (
                                    <View
                                        style={{
                                            backgroundColor: "#A3D2A2",
                                            paddingHorizontal: 10,
                                            paddingVertical: 1,
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...theme.FONTS.Lato_700Bold,
                                                fontSize: 8,
                                                textTransform: "uppercase",
                                                color: theme.COLORS.white,
                                                lineHeight: 8 * 1.7,
                                            }}
                                        >
                                            sale
                                        </Text>
                                    </View>
                                )}
                            </ImageBackground>
                            <View
                                style={{
                                    flex: 1,
                                    paddingVertical: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.TenorSans_400Regular,
                                        lineHeight: 14 * 1,
                                        fontSize: 14,
                                        color: theme.COLORS.black,
                                        marginBottom: 7,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.name}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginBottom: 11,
                                    }}
                                >
                                    {item?.oldPrice && (
                                        <Text
                                            style={{
                                                ...theme.FONTS.Lato_400Regular,
                                                fontSize: 10,
                                                textDecorationLine:
                                                    "line-through",
                                                color: "#999999",
                                                marginRight: 4,
                                            }}
                                        >
                                            ${item.oldPrice}
                                        </Text>
                                    )}
                                    <Text
                                        style={{
                                            ...theme.FONTS.Lato_700Bold,
                                            fontSize: 14,
                                            color: item.oldPrice
                                                ? theme.COLORS.accent
                                                : theme.COLORS.gray,
                                            lineHeight: 14 * 1.5,
                                        }}
                                    >
                                        ${item.price}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <svg.StarSvg />
                                    <Text
                                        style={{
                                            ...theme.FONTS.Lato_400Regular,
                                            fontSize: 12,
                                            marginLeft: 4,
                                            color: theme.COLORS.gray,
                                            lineHeight: 12 * 1.7,
                                        }}
                                    >
                                        {item.rating}.0
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        top: 4,
                                        right: -2,
                                        width: 40,
                                        height: 25,
                                        alignItems: "center",
                                    }}
                                >
                                    <svg.WishlistLikeSvg />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ bottom: -2, right: -2 }}
                                    onPress={() => addToCart(item)}
                                >
                                    <svg.WishlistBasketSvg />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ ...theme.COLORS.backgroundColorWhite, flex: 1 }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default Wishlist;
