import { View, StatusBar, Text } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SafeAreaView from "react-native-safe-area-view";
import { useSelector } from "react-redux";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const cartItems = [
    {
        id: "1",
        name: "Foundation Beshop",
        price: "1 x $200.95",
    },
    {
        id: "2",
        name: "Hair mask with oat extract",
        price: "1 x $125.95",
    },
];

const Checkout: React.FC = ({ navigation }: any) => {
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
                <StatusBar barStyle="dark-content" />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="Checkout"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderOrderDetails = () => {
        return (
            <View>
                <components.CheckoutBlock
                    leftContent="My order"
                    rightContent="$294.21"
                >
                    {cartItems.map((item) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: 6,
                                }}
                            >
                                <Text
                                    style={{
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 14,
                                        color: theme.COLORS.gray,
                                        lineHeight: 14 * 1.5,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 14,
                                        color: theme.COLORS.gray,
                                        lineHeight: 14 * 1.5,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.price}
                                </Text>
                            </View>
                        );
                    })}
                    <components.CheckoutDetails
                        leftContent="Discount"
                        rightContent="-$32.69"
                        containerStyle={{ marginBottom: 6 }}
                    />
                    <components.CheckoutDetails
                        leftContent="Delivery"
                        rightContent="Free"
                        textStyle={{ color: "#00824B" }}
                    />
                </components.CheckoutBlock>
                <components.CheckoutBlock
                    leftContent="Shipping details"
                    rightContent={<svg.CheckoutArrowSvg />}
                    onPress={() => navigation.navigate("ShippingDetails")}
                >
                    <components.CheckoutDetails leftContent="8000 S Kirkland Ave, Chicago, IL 6065..." />
                </components.CheckoutBlock>
                <components.CheckoutBlock
                    leftContent="Payment method"
                    rightContent={<svg.CheckoutArrowSvg />}
                    onPress={() => navigation.navigate("CheckoutPayment")}
                >
                    <components.CheckoutDetails leftContent="7741 ******** 6644" />
                </components.CheckoutBlock>
                <components.CommentInput />
                <components.Button
                    title={`Confirm order $${totalPrice.toFixed(2)}`}
                    onPress={() => navigation.navigate("OrderSuccessful")}
                />
            </View>
        );
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 30,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                {renderOrderDetails()}
            </KeyboardAwareScrollView>
        );
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
            {renderContent()}
        </SafeAreaView>
    );
};

export default Checkout;
