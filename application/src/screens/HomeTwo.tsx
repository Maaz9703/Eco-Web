import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { theme, products } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const categories = [
    {
        id: "1",
        category: "SPA",
    },
    {
        id: "2",
        category: "Nails",
    },
    {
        id: "3",
        category: "Perfum",
    },
    {
        id: "4",
        category: "Skin Care",
    },
    {
        id: "5",
        category: "Hair Care",
    },
    {
        id: "6",
        category: "Face Care",
    },
];

const featuredProducts = products.filter(function (currentValue) {
    return currentValue.promo_categories.includes("Featured");
});

const bestSellers = products.filter(function (currentValue) {
    return currentValue.promo_categories.includes("Best Seller");
});

const HomeTwo: React.FC = ({ navigation }: any) => {
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

    const renderCategories = () => {
        return (
            <View style={{ ...theme.COLORS.backgroundColorWhite }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingLeft: 20,
                        marginBottom: 40,
                    }}
                >
                    {categories.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    paddingHorizontal: 14,
                                    paddingVertical: 4,
                                    borderWidth: 1,
                                    borderColor: "#EEEEEE",
                                    backgroundColor: theme.COLORS.lightBlue,
                                    justifyContent: "center",
                                    marginRight: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16 * 1.7,
                                        color: theme.COLORS.gray,
                                        ...theme.FONTS.Lato_400Regular,
                                    }}
                                >
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    const renderFeaturedProducts = () => {
        return (
            <View
                style={{
                    ...theme.COLORS.backgroundColorWhite,
                    marginBottom: 40,
                }}
            >
                <components.ProductCategory
                    title="Featured Products"
                    containerStyle={{ marginHorizontal: 20 }}
                    onPress={() =>
                        navigation.navigate("Shop", {
                            title: "Featured Products",
                            categoryProducts: featuredProducts,
                        })
                    }
                />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20 }}
                >
                    {featuredProducts.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{ width: 200, marginRight: 14 }}
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
                                        height: 250,
                                        backgroundColor: "#F6F5FB",
                                        marginBottom: 14,
                                    }}
                                    resizeMode="contain"
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
                                    <View
                                        style={{
                                            justifyContent: "space-between",
                                            height: 90,
                                            position: "absolute",
                                            bottom: 10,
                                            right: 10,
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <svg.HomeLikeSvg />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => addToCart(item)}
                                        >
                                            <svg.HomeBasketSvg />
                                        </TouchableOpacity>
                                    </View>
                                    <components.Sale item={item} />
                                </ImageBackground>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        ...theme.FONTS.H5,
                                        color: theme.COLORS.black,
                                        marginBottom: 5,
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
                </ScrollView>
            </View>
        );
    };

    const renderPromoBannerTwo = () => {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 20, marginBottom: 40 }}
            >
                <Image
                    source={{
                        uri: "https://via.placeholder.com/1105x606/F9F8FE/?text=PROMO+BANNER",
                    }}
                    style={{ width: "100%", height: 202 }}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        );
    };

    const renderBestSellers = () => {
        return (
            <View style={{ marginBottom: 40 }}>
                <components.ProductCategory
                    title="Best sellers"
                    containerStyle={{ marginHorizontal: 20 }}
                    onPress={() =>
                        navigation.navigate("Shop", {
                            title: "Best Sellers",
                            categoryProducts: bestSellers,
                        })
                    }
                />
                <View style={{ paddingHorizontal: 20 }}>
                    {bestSellers.map((item, index, array) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: "100%",
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: "#EEEEEE",
                                    marginBottom:
                                        index === array.length - 1 ? 0 : 8,
                                    flexDirection: "row",
                                    alignItems: "center",
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
                                        width: 80,
                                        height: 80,
                                        marginRight: 14,
                                        backgroundColor: "#F6F5FB",
                                    }}
                                    resizeMode="cover"
                                ></ImageBackground>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            ...theme.FONTS.H6,
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
                                            // flex: 1,
                                        }}
                                    >
                                        {item?.oldPrice && (
                                            <Text
                                                style={{
                                                    ...theme.FONTS
                                                        .Lato_400Regular,
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
                                    <View style={{ flex: 1 }} />
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
                                                color: theme.COLORS.gray,
                                                marginLeft: 4,
                                                lineHeight: 12 * 1.7,
                                            }}
                                        >
                                            {item.rating}.0
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        alignSelf: "flex-start",
                                        paddingTop: 4,
                                        paddingHorizontal: 10,
                                    }}
                                >
                                    <svg.HeartSvg />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };

    const renderPromoBannerThree = () => {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 20, marginBottom: 20 }}
            >
                <Image
                    source={{
                        uri: "https://via.placeholder.com/1005x633/F9F8FE/?text=PROMO+BANNER",
                    }}
                    style={{ width: "100%", height: 202 }}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 20,
                    backgroundColor: theme.COLORS.white,
                    paddingTop: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {renderCategories()}
                {renderFeaturedProducts()}
                {renderPromoBannerTwo()}
                {renderBestSellers()}
                {renderPromoBannerThree()}
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

export default HomeTwo;
