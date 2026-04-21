import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SafeAreaView from "react-native-safe-area-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const Order: React.FC = ({ navigation }: any) => {
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);

    const renderStatusBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: theme.SIZES.STATUS_BAR_HEIGHT,
                    backgroundColor: theme.COLORS.pastel,
                }}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={theme.COLORS.pastel}
                />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title={cartItems.length > 0 && "Order"}
                goBack={cartItems.length > 0 ? true : false}
                bag={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderCartIsEmpty = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 28,
                    paddingBottom: 25,
                    backgroundColor: "#FCEDEA",
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        height: 319,
                        paddingHorizontal: 14,
                        marginBottom: 40,
                    }}
                >
                    <ImageBackground
                        source={require("../assets/bg-03.png")}
                        style={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        resizeMode="contain"
                    >
                        <Image
                            source={{
                                uri: "https://via.placeholder.com/519x696",
                            }}
                            style={{
                                width: 173,
                                height: 232,
                            }}
                        />
                        <View style={{ position: "absolute", bottom: -10 }}>
                            <svg.CartEmptySvg />
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            ...theme.FONTS.H2,
                            textAlign: "center",
                            textTransform: "capitalize",
                            color: theme.COLORS.black,
                            marginBottom: 14,
                        }}
                    >
                        Your cart is empty!
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            marginBottom: 30,
                        }}
                    >
                        Looks like you haven't made
                        {"\n"}your order yet.
                    </Text>
                    <components.Button
                        title="shop now"
                        onPress={() => navigation.navigate("Shop")}
                    />
                </View>
            </ScrollView>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    showsVerticalScrollIndicator={false}
                >
                    {cartItems.length > 0 &&
                        cartItems.map((item: any, index: number): any => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: "100%",
                                        borderWidth: 1,
                                        borderColor: "#EEEEEE",
                                        backgroundColor: theme.COLORS.white,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: 10,
                                        marginBottom: 8,
                                        height: 102,
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
                                            height: "100%",
                                            marginRight: 10,
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
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        ...theme.FONTS
                                                            .Lato_700Bold,
                                                        fontSize: 8,
                                                        lineHeight: 8 * 1.8,
                                                        textTransform:
                                                            "uppercase",
                                                        color: theme.COLORS
                                                            .white,
                                                    }}
                                                >
                                                    Sale
                                                </Text>
                                            </View>
                                        )}
                                    </ImageBackground>
                                    <View style={{ flex: 1, height: "100%" }}>
                                        <Text
                                            style={{
                                                ...theme.FONTS
                                                    .TenorSans_400Regular,
                                                fontSize: 14,
                                                lineHeight: 14 * 1.2,
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
                                            }}
                                        >
                                            {item.oldPrice && (
                                                <Text
                                                    style={{
                                                        ...theme.FONTS
                                                            .Lato_400Regular,
                                                        fontSize: 10,
                                                        color: "#999999",
                                                        textDecorationLine:
                                                            "line-through",
                                                        lineHeight: 10 * 1.5,
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    ${item.oldPrice}
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    ...theme.FONTS
                                                        .Lato_400Regular,
                                                    fontSize: 14,
                                                    color: item.oldPrice
                                                        ? theme.COLORS.accent
                                                        : theme.COLORS.black,
                                                    lineHeight: 14 * 1.5,
                                                }}
                                            >
                                                ${item.price}
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <components.Counter item={item} />
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    <View>
                        <View
                            style={{
                                width: "100%",
                                height: 62,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 6,
                            }}
                        >
                            <View
                                style={{
                                    width: "55%",
                                    height: "100%",
                                    borderWidth: 1,
                                    borderColor: theme.COLORS.pastel,
                                    justifyContent: "center",
                                    paddingHorizontal: 20,
                                }}
                            >
                                <TextInput
                                    placeholder="Enter promocode"
                                    style={{ flex: 1 }}
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: "43%",
                                    height: "100%",
                                    borderWidth: 1,
                                    borderColor: "#EEEEEE",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: theme.COLORS.lightBlue,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 14,
                                        textTransform: "uppercase",
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    apply
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: "100%",
                                padding: 20,
                                backgroundColor: theme.COLORS.lightBlue,
                                marginTop: 45,
                                borderWidth: 1,
                                borderColor: "#EEEEEE",
                                marginBottom: 10,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: 9,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    Subtotal
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    $326.90
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: 9,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    Discount
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    -$32.69
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderBottomWidth: 2,
                                    borderBottomColor: theme.COLORS.black,
                                    paddingBottom: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    Delivery
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: "#00824B",
                                    }}
                                >
                                    Free
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    Total
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    ${totalPrice.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                        <components.Button
                            title="proceed to checkout"
                            onPress={() => navigation.navigate("Checkout")}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </ScrollView>
        );
    };

    const ifItemExists = () => {
        return cartItems.length > 0 ? renderContent() : renderCartIsEmpty();
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: theme.COLORS.white,
            }}
            forceInset={{ top: "never" }}
        >
            {renderStatusBar()}
            {renderHeader()}
            {ifItemExists()}
        </SafeAreaView>
    );
};

export default Order;
