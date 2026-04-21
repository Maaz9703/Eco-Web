import {
    View,
    Text,
    StatusBar,
    Platform,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
// const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? getStatusBarHeight() : 0;

const promocodes: any = [
    {
        id: "1",
        name: "Acme Co.",
        code: "Discount23",
        discount: "10%",
        valid: "Jan 30, 2023",
        relevant: true,
        color: "#D05278",
    },
    {
        id: "2",
        name: "Mem Sa.",
        code: "Discount23",
        discount: "20%",
        valid: "Jan 30, 2023",
        relevant: false,
        color: "#00824B",
    },
    {
        id: "3",
        name: "Kord Qm.",
        code: "Discount23",
        discount: "30%",
        valid: "Jan 30, 2023",
        relevant: true,
        color: "#EF962D",
    },
    {
        id: "4",
        name: "Lap Xa.",
        code: "Discount23",
        discount: "40%",
        valid: "Jan 30, 2023",
        relevant: false,
        color: "#D01811",
    },
    {
        id: "5",
        name: "Nelo Pw.",
        code: "Discount23",
        discount: "50%",
        valid: "Jan 30, 2023",
        relevant: true,
        color: "#D25218",
    },
    {
        id: "6",
        name: "Imon Lo.",
        code: "Discount23",
        discount: "60%",
        valid: "Jan 30, 2023",
        relevant: false,
        color: "#D01199",
    },
];

const current = promocodes.filter(function (currentValue: any) {
    return currentValue.relevant === true;
});

const used = promocodes.filter(function (currentValue: any) {
    return currentValue.relevant === false;
});

const MyPromocodes: React.FC = () => {
    const [category, setCategory] = useState("Current");

    // const promocodes: any = [];

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
                title={
                    promocodes.length > 0 ? "My promocodes" : "Add a promocode"
                }
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderPromocodes = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "49.5%",
                            paddingBottom: 11,
                            borderBottomWidth: 1,
                            borderBottomColor:
                                category === "Current" ? "#222222" : "#909090",
                        }}
                        onPress={() => setCategory("Current")}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.H4,
                                color:
                                    category === "Current"
                                        ? "#222222"
                                        : "#909090",
                            }}
                        >
                            Current
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "49.5%",
                            paddingBottom: 11,
                            borderBottomWidth: 1,
                            borderBottomColor:
                                category === "Used" ? "#222222" : "#909090",
                        }}
                        onPress={() => setCategory("Used")}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.H4,
                                color:
                                    category === "Used" ? "#222222" : "#909090",
                            }}
                        >
                            Used
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    {category === "Current" &&
                        current.map((item: any, index: number) => (
                            <components.Promocode key={index} item={item} />
                        ))}
                    {category === "Used" &&
                        used.map((item: any, index: number) => (
                            <components.Promocode key={index} item={item} />
                        ))}
                </View>
            </ScrollView>
        );
    };

    const renderPromocodesEmpty = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 20,
                    paddingBottom: 25,
                    backgroundColor: "#FCEDEA",
                }}
                enableOnAndroid={true}
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
                            <svg.PromocodeEmptySvg />
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
                        Your don’t have {"\n"}promocodes yet!
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            marginBottom: 30,
                        }}
                    >
                        Qui ex aute ipsum duis. Incididunt {"\n"}adipisicing
                        voluptate laborum
                    </Text>
                    <components.InputField
                        placeholder="Discount2022"
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <components.Button title="Add a  promocode" />
                </View>
            </KeyboardAwareScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor:
                    promocodes.length > 0 ? theme.COLORS.white : "#FCEDEA",
            }}
            forceInset={{ top: "never" }}
        >
            {renderStatusBar()}
            {renderHeader()}
            {promocodes && promocodes.length > 0
                ? renderPromocodes()
                : renderPromocodesEmpty()}
        </SafeAreaView>
    );
};

export default MyPromocodes;
