import {
    View,
    Text,
    Platform,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";

const creditCards = [
    {
        id: "1",
        number: "7741 ******** 6644",
    },
    {
        id: "2",
        number: "7674 ******** 1884",
    },
];

const paymentMethods = [
    {
        id: "1",
        method: "Apple Pay",
    },
    {
        id: "2",
        method: "Pay Pal",
    },
    {
        id: "3",
        method: "Cash",
    },
];

type Props = {
    barStyle?: "light-content" | "dark-content";
    backgroundColor?: string;
};

const CustomStatusBar: React.FC<Props> = ({
    backgroundColor = "green",
    barStyle = "dark-content",
}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
};

const CheckoutPayment: React.FC = () => {
    const [selectCreditCard, setSelectCreditCard] = useState<number | null>(1);
    const [selectPayment, setSelectPayment] = useState(null);

    const renderStatusBar = () => {
        return (
            <StatusBar backgroundColor={"#FCEDEA"} barStyle={"dark-content"} />
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="Payment Method"
                goBack={true}
                containerStyle={{ backgroundColor: "#FCEDEA" }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        padding: 20,
                        backgroundColor: "#FAF9FF",
                        borderWidth: 1,
                        borderColor: "#EEEEEE",
                        marginBottom: 8,
                    }}
                >
                    <View
                        style={{
                            borderBottomWidth: 2,
                            marginBottom: 20,
                            borderBottomColor: theme.COLORS.black,
                        }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.H4,
                                color: theme.COLORS.black,
                                paddingBottom: 11,
                            }}
                        >
                            Credit cards
                        </Text>
                    </View>
                    {creditCards.map((item, index: any, array) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom:
                                    item === creditCards[array.length - 1]
                                        ? 0
                                        : 15,
                            }}
                            onPress={() => {
                                setSelectCreditCard(index),
                                    setSelectPayment(null);
                            }}
                        >
                            <Text
                                style={{
                                    ...theme.FONTS.Lato_400Regular,
                                    fontSize: 14,
                                    color: theme.COLORS.gray,
                                    lineHeight: 14 * 1.5,
                                }}
                            >
                                {item.number}
                            </Text>
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 50,
                                    borderWidth: 2,
                                    borderColor:
                                        index === selectCreditCard
                                            ? theme.COLORS.accent
                                            : "#999999",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        backgroundColor:
                                            index === selectCreditCard
                                                ? theme.COLORS.accent
                                                : "transparent",
                                        borderRadius: 5,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {paymentMethods.map((item, index: any, array) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            padding: 20,
                            width: "100%",
                            backgroundColor: theme.COLORS.white,
                            borderWidth: 1,
                            borderColor: "#EEEEEE",
                            marginBottom:
                                item === paymentMethods[array.length - 1]
                                    ? 0
                                    : 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        onPress={() => {
                            setSelectPayment(index), setSelectCreditCard(null);
                        }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.H5,
                                color: theme.COLORS.black,
                            }}
                        >
                            {item.method}
                        </Text>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor:
                                    index === selectPayment
                                        ? theme.COLORS.accent
                                        : "#999999",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor:
                                        index === selectPayment
                                            ? theme.COLORS.accent
                                            : "transparent",
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    return Platform.OS === "android" ? (
        <SafeAreaView style={{ ...theme.COLORS.backgroundColorWhite, flex: 1 }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    ) : (
        <View style={{ ...theme.COLORS.backgroundColorWhite, flex: 1 }}>
            <CustomStatusBar backgroundColor={"#FCEDEA"} />
            {renderHeader()}
            {renderContent()}
            <SafeAreaView></SafeAreaView>
        </View>
    );
};

export default CheckoutPayment;
