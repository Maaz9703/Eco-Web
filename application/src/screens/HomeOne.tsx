import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { products, theme } from "../constants";
import { components } from "../components";
import api from "../utils/api";
import { svg } from "../svg";

const HomeOne: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await api.get('/products');
                setFetchedProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
                // Fallback to dummy data if API is down
                setFetchedProducts(products);
            }
        };
        loadProducts();
    }, []);

    const trendingProducts = fetchedProducts.filter(function (currentValue: any) {
        return currentValue.promo_categories?.includes("Trending Product");
    });

    const newArrivals = fetchedProducts.filter(function (currentValue: any) {
        return currentValue.promo_categories?.includes("New Arrivals");
    });

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
                translucent={true}
            />
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                logo={true}
                bag={true}
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
            />
        );
    };

    const renderMainBlock = () => {
        return (
            <View
                style={{
                    width: "100%",
                    paddingVertical: 76,
                    backgroundColor: theme.COLORS.pastel,
                    paddingHorizontal: 20,
                    marginBottom: 40,
                }}
            >
                <Image
                    source={require("../assets/bg-04.png")}
                    style={{
                        width: 240,
                        height: 230,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                    }}
                />
                <Image
                    source={{
                        uri: "https://via.placeholder.com/2088x2952/F9F8FE/?text=IMAGE",
                    }}
                    style={{
                        width: 232,
                        height: 328,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                    }}
                />
                <Text
                    style={{
                        ...theme.FONTS.H1,
                        color: theme.COLORS.black,
                        marginBottom: 10,
                    }}
                >
                    Beauty & Care
                </Text>
                <Text
                    style={{
                        ...theme.FONTS.textStyle16,
                        color: theme.COLORS.gray,
                        marginBottom: 24,
                    }}
                >
                    Labore sunt culpa excepteur {"\n"}culpa ipsum.
                </Text>
                <TouchableOpacity
                    style={{
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: theme.COLORS.black,
                        alignSelf: "flex-start",
                        paddingHorizontal: 26.5,
                    }}
                >
                    <Text
                        style={{
                            color: theme.COLORS.white,
                            textTransform: "uppercase",
                            fontSize: 14,
                            ...theme.FONTS.Lato_400Regular,
                        }}
                    >
                        shop now
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderTrendingProducts = () => (
        <View style={{ marginBottom: 40 }}>
            <components.ProductCategory
                title="Trending Products"
                containerStyle={{ marginBottom: 18, marginHorizontal: 20 }}
                onPress={() =>
                    navigation.navigate("Shop", {
                        title: "Trending Products",
                        categoryProducts: trendingProducts,
                    })
                }
            />
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ paddingLeft: 20 }}
                showsHorizontalScrollIndicator={false}
            >
                {trendingProducts.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{ width: 138, marginRight: 14 }}
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
                                backgroundColor: "#F4F3F9",
                            }}
                            resizeMode="contain"
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: 7,
                                }}
                            >
                                <svg.StarSvg />
                                <Text
                                    style={{
                                        marginLeft: 4,
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 12,
                                        lineHeight: 12 * 1.7,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    {item.rating}.0
                                </Text>
                            </View>
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
                            <View
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 12,
                                        paddingBottom: 8,
                                        paddingTop: 12,
                                    }}
                                >
                                    <svg.HeartSvg />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 12,
                                        paddingBottom: 12,
                                        paddingTop: 8,
                                    }}
                                    onPress={() => addToCart(item)}
                                >
                                    <svg.BasketTwoSvg />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...theme.FONTS.H6,
                                color: theme.COLORS.black,
                                marginBottom: 4,
                            }}
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
                                        textDecorationLine: "line-through",
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
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    const renderPromoBannerOne = () => {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 20, marginBottom: 40 }}
            >
                <Image
                    source={{
                        uri: "https://via.placeholder.com/1125x714/F9F8FE/?text=PROMO+BANNER",
                    }}
                    style={{ width: "100%", height: 202 }}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        );
    };

    const renderNewArrivals = () => {
        return (
            <View style={{ marginBottom: 0 }}>
                <components.ProductCategory
                    title="New Arrivals"
                    containerStyle={{ marginBottom: 18, marginHorizontal: 20 }}
                    onPress={() =>
                        navigation.navigate("Shop", {
                            title: "New Arrivals",
                            categoryProducts: newArrivals,
                        })
                    }
                />
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                    }}
                >
                    {newArrivals.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: theme.SIZES.width * 0.53 - 40,
                                    marginBottom: 20,
                                }}
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
                                        backgroundColor: "#F4F3F9",
                                    }}
                                    resizeMode="cover"
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            margin: 10,
                                        }}
                                    >
                                        <svg.StarSvg />
                                        <Text
                                            style={{
                                                ...theme.FONTS.Lato_400Regular,
                                                fontSize: 12,
                                                color: theme.COLORS.gray,
                                                marginLeft: 4,
                                            }}
                                        >
                                            {item.rating}.0
                                        </Text>
                                    </View>
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
                                    <View
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                paddingHorizontal: 12,
                                                paddingBottom: 8,
                                                paddingTop: 12,
                                            }}
                                        >
                                            <svg.HeartSvg />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                paddingHorizontal: 12,
                                                paddingBottom: 12,
                                                paddingTop: 8,
                                            }}
                                            onPress={() => addToCart(item)}
                                        >
                                            <svg.BasketTwoSvg />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
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
                                            lineHeight: 14 * 1.5,
                                        }}
                                    >
                                        ${item.price}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 20,
                    backgroundColor: theme.COLORS.white,
                }}
                showsVerticalScrollIndicator={false}
            >
                {renderMainBlock()}
                {renderTrendingProducts()}
                {renderPromoBannerOne()}
                {renderNewArrivals()}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{ ...theme.COLORS.backgroundColorPastel, flex: 1 }}
        >
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default HomeOne;
