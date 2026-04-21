import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";
import { useRoute } from "@react-navigation/native";

import { theme } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const Shop: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const route: any = useRoute();
    const { title, categoryProducts } = route.params;

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

    const renderHeader = () => {
        return (
            <components.Header
                title={title}
                goBack={true}
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
            />
        );
    };

    const renderSettings = () => {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 18,
                    backgroundColor: theme.COLORS.white,
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <svg.Filters />
                </TouchableOpacity>
                <TouchableOpacity>
                    <svg.SortingSvg />
                </TouchableOpacity>
            </View>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: theme.COLORS.white,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                    }}
                >
                    {categoryProducts.map((item: any, index: any) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: theme.SIZES.width * 0.53 - 40,
                                    marginBottom: 20,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Product", {
                                            item: item,
                                        })
                                    }
                                >
                                    <ImageBackground
                                        source={{ uri: item.image }}
                                        style={{
                                            width: "100%",
                                            height: 170,
                                            marginBottom: 12,
                                        }}
                                    >
                                        {item.promo_categories.includes(
                                            "Sale"
                                        ) && (
                                            <View
                                                style={{
                                                    backgroundColor: "#A3D2A2",
                                                    alignSelf: "flex-end",
                                                    paddingHorizontal: 10,
                                                    paddingVertical: 1,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        ...theme.FONTS
                                                            .Lato_400Regular,
                                                        fontSize: 8,
                                                        textTransform:
                                                            "uppercase",
                                                        color: theme.COLORS
                                                            .white,
                                                        lineHeight: 8 * 1.7,
                                                    }}
                                                >
                                                    sale
                                                </Text>
                                            </View>
                                        )}
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                position: "absolute",
                                                left: 8,
                                                top: 12,
                                            }}
                                        >
                                            <svg.StarSvg />
                                            <Text
                                                style={{
                                                    ...theme.FONTS
                                                        .Lato_400Regular,
                                                    fontSize: 12,
                                                    color: theme.COLORS.gray,
                                                    marginLeft: 4,
                                                    lineHeight: 12 * 1.7,
                                                }}
                                            >
                                                {item.rating}.0
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                            }}
                                        >
                                            <TouchableOpacity
                                                style={{
                                                    paddingHorizontal: 14,
                                                    paddingBottom: 8,
                                                    paddingTop: 14,
                                                }}
                                            >
                                                <svg.HeartSvg />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{
                                                    paddingHorizontal: 14,
                                                    paddingBottom: 14,
                                                    paddingTop: 8,
                                                }}
                                                onPress={() => addToCart(item)}
                                            >
                                                <svg.BasketTwoSvg />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        ...theme.FONTS.H6,
                                        color: theme.COLORS.black,
                                        marginBottom: 4,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.name}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
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
                                        }}
                                    >
                                        ${item.price}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.pastel }}>
            {renderHeader()}
            {renderSettings()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default Shop;
