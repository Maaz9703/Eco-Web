import {
    View,
    Text,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
// const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? getStatusBarHeight() : 0;

const adresses = [
    {
        id: "1",
        place: "Home",
        location: "8000 S Kirkland Ave, Chicago",
        icon: <svg.HomeAdressSvg />,
    },
    {
        id: "2",
        place: "Work",
        location: "8000 S Kirkland Ave, Chicago",
        icon: <svg.BriefcaseAdressSvgs />,
    },
    {
        id: "3",
        place: "Other",
        location: "8000 S Kirkland Ave, Chicago",
        icon: <svg.MapPinAdressSvg />,
    },
];

const MyAddress: React.FC = ({ navigation }: any) => {
    const [category, setCategory] = useState("Current");

    const renderStatusBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#FCEDEA",
                    zIndex: 99999,
                }}
            >
                <StatusBar barStyle="dark-content" />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="My address"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 25,
                }}
            >
                {adresses.map((item, index, array) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom:
                                    index === array.length - 1 ? 0 : 8,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "#FAF9FF",
                                    borderWidth: 1,
                                    borderColor: "#EEEEEE",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 14,
                                }}
                            >
                                {item.icon}
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        ...theme.FONTS.H5,
                                        color: theme.COLORS.black,
                                        marginBottom: 4,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.place}
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.location}
                                </Text>
                            </View>
                            <svg.EditSvg />
                        </TouchableOpacity>
                    );
                })}
                <TouchableOpacity
                    style={{
                        marginTop: theme.SIZES.height * 0.15,
                        marginBottom: 20,
                        alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("AddANewAddress")}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#EEEEEE",
                            marginBottom: 10,
                        }}
                    >
                        <svg.NewCardPlusSvg />
                    </View>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle14,
                            color: theme.COLORS.gray,
                        }}
                    >
                        Add a new address
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default MyAddress;
