import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const comments = [
    {
        name: "Annette Black",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Jenny Wilson",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Cameron Williamson",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Theresa Webb",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
];

const Product: React.FC = ({ navigation }: any) => {
    const route: any = useRoute();
    const { item } = route.params;
    const dispatch = useDispatch();

    const [color, setColor] = useState(item.colors[0]);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

    function updateCurrentSlideIndex(e: {
        nativeEvent: { contentOffset: { x: any } };
    }) {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
        setCurrentSlideIndex(currentIndex);
    }

    const renderStatusBar = () => {
        return (
            <StatusBar
                animated={true}
                backgroundColor={theme.COLORS.white}
                barStyle={"dark-content"}
                translucent={true}
            />
        );
    };

    const renderHeader = () => {
        return <components.Header goBack={true} bag={true} />;
    };

    const renderImage = () => {
        return (
            <ImageBackground
                style={{
                    width: "100%",
                    height: 300,
                    paddingVertical: 25,
                }}
                source={{ uri: item.image }}
            ></ImageBackground>
        );
    };

    const renderProductInfo = () => {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            ...theme.FONTS.H3,
                            color: theme.COLORS.black,
                            textTransform: "capitalize",
                        }}
                        numberOfLines={1}
                    >
                        {item.name}
                    </Text>
                    <TouchableOpacity>
                        <svg.ProductLikeSvg />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 7,
                    }}
                >
                    <Text
                        style={{
                            ...theme.FONTS.Lato_400Regular,
                            fontSize: 12,
                            textTransform: "uppercase",
                            color: "#00824B",
                            lineHeight: 12 * 1.5,
                            marginRight: 10,
                        }}
                    >
                        in stock
                    </Text>
                    <svg.StarSvg color="#FFBE00" />
                    <Text
                        style={{
                            ...theme.FONTS.Lato_400Regular,
                            fontSize: 12,
                            color: theme.COLORS.gray,
                            lineHeight: 12 * 1.7,
                            marginLeft: 4,
                        }}
                    >
                        {item.rating}.0
                    </Text>
                </View>
                <Text
                    style={{
                        marginBottom: 20,
                        ...theme.FONTS.Lato_400Regular,
                        fontSize: 20,
                        lineHeight: 20 * 1.5,
                        color: theme.COLORS.black,
                    }}
                >
                    ${item.price}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 20,
                        marginBottom: 30,
                        borderBottomWidth: 1,
                        borderBottomColor: "#EEEEEE",
                    }}
                >
                    <Text
                        style={{
                            ...theme.FONTS.H5,
                            color: theme.COLORS.black,
                            marginRight: 14,
                        }}
                    >
                        Color
                    </Text>
                    {item.colors.map(
                        (item: string, index: React.Key | null | undefined) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor:
                                            item === "Bridesmaid"
                                                ? "#FCEDEA"
                                                : item === "Misty Rose"
                                                ? "#FEE1DB"
                                                : item === "Melon"
                                                ? "#FDC5B9"
                                                : item === "Mona Lisa"
                                                ? "#FFA08A"
                                                : undefined,
                                        marginRight: 14,
                                        borderWidth: 2,
                                        borderColor:
                                            item === color
                                                ? "#D05278"
                                                : theme.COLORS.transparent,
                                    }}
                                    onPress={() => setColor(item)}
                                ></TouchableOpacity>
                            );
                        }
                    )}
                </View>

                <Text
                    style={{
                        marginBottom: 14,
                        ...theme.FONTS.H5,
                        color: theme.COLORS.black,
                    }}
                >
                    Description
                </Text>
                <Text
                    style={{
                        marginBottom: 40,
                        ...theme.FONTS.textStyle16,
                        color: theme.COLORS.gray,
                    }}
                >
                    {item.description}
                </Text>
            </View>
        );
    };

    const renderButton = () => {
        return (
            <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
                <components.Button
                    title="+ ADd to cart"
                    onPress={() => addToCart()}
                />
            </View>
        );
    };

    const renderReviews = () => {
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <components.ProductCategory
                    title={`Reviews (${comments.length})`}
                    containerStyle={{ marginBottom: 18 }}
                    onPress={() => navigation.navigate("Reviews")}
                />
                {comments.map((item, index, array) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: "100%",
                                height: 153,
                                backgroundColor: theme.COLORS.white,
                                borderWidth: 1,
                                borderColor: "#EEEEEE",
                                marginBottom:
                                    item === comments[array.length - 1]
                                        ? 20
                                        : 8,
                                padding: 20,
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                source={item.photo}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    marginRight: 14,
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...theme.FONTS.H5,
                                            marginBottom: 6,
                                            color: theme.COLORS.black,
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
                                        <svg.StarSvg />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                ...theme.FONTS.Lato_400Regular,
                                                fontSize: 12,
                                                color: theme.COLORS.gray,
                                                lineHeight: 12 * 1.7,
                                            }}
                                        >
                                            {item.rating}.0
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 10,
                                        color: "#999999",
                                        lineHeight: 10 * 1.5,
                                        marginBottom: 10,
                                    }}
                                >
                                    {item.date}
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    {item.comment}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
            {renderStatusBar()}
            {renderHeader()}
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {renderImage()}
                {renderProductInfo()}
                {renderButton()}
                {renderReviews()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Product;

const styles = StyleSheet.create({
    dot: {
        width: 5,
        height: 5,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#CECDD2",
        backgroundColor: "#CECDD2",
    },
});
