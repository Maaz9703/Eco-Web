import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";

const addresses = [
    {
        id: "1",
        place: "Home",
        location: "8000 S Kirkland Ave, Chicago...",
    },
    {
        id: "2",
        place: "Work",
        location: "8000 S Kirkland Ave, Chicago...",
    },
    {
        id: "3",
        place: "Other",
        location: "8000 S Kirkland Ave, Chicago...",
    },
];

const ShippingDetails: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState(0);

    const renderStatusBar = () => {
        return (
            <StatusBar
                animated={true}
                backgroundColor={theme.COLORS.white}
                barStyle={"dark-content"}
            />
        );
    };

    const renderHeader = () => {
        return <components.Header title="Shipping Details" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    flexGrow: 1,
                    paddingTop: 20,
                }}
            >
                {addresses.map((item, index, array) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                borderWidth: 1,
                                marginBottom:
                                    item === addresses[addresses.length - 1]
                                        ? 0
                                        : 8,
                                borderColor: "#EEEEEE",
                                paddingVertical: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            onPress={() => setSelectedAddress(index)}
                        >
                            <View>
                                <Text
                                    style={{
                                        ...theme.FONTS.TenorSans_400Regular,
                                        fontSize: 16,
                                        lineHeight: 16 * 1.2,
                                        marginBottom: 4,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.place}
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
                                    {item.location}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 50,
                                    borderWidth: 2,
                                    borderColor:
                                        index === selectedAddress
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
                                            index === selectedAddress
                                                ? theme.COLORS.accent
                                                : "transparent",
                                        borderRadius: 5,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, ...theme.COLORS.backgroundColorWhite }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default ShippingDetails;
