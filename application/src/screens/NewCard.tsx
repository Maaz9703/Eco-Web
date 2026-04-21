import { View, StatusBar, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";

const NewCard: React.FC = ({ navigation }: any) => {
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
        return (
            <components.Header
                title="Add a new card"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorWhite }}
            />
        );
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    marginHorizontal: 20,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        backgroundColor: theme.COLORS.pastel,
                        paddingTop: 30,
                        paddingBottom: 50,
                        paddingHorizontal: 20,
                    }}
                >
                    <Image
                        source={require("../assets/card.png")}
                        style={{
                            alignSelf: "center",
                            marginBottom: 30,
                            height: 170,
                            width: 279,
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 20,
                            height: 60,
                            width: "100%",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: theme.COLORS.white,
                            marginBottom: 10,
                        }}
                    >
                        <TextInput
                            placeholder="Kristin Watson"
                            style={{
                                flex: 1,
                                height: "100%",
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: 16,
                                lineHeight: 16 * 1,
                                ...theme.FONTS.Lato_400Regular,
                            }}
                            placeholderTextColor={theme.COLORS.black}
                        />
                    </View>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            height: 60,
                            width: "100%",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: theme.COLORS.white,
                            marginBottom: 10,
                        }}
                    >
                        <TextInput
                            placeholder="xxxx xxxx xxxx xxxx"
                            style={{
                                flex: 1,
                                height: "100%",
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: 16,
                                lineHeight: 16 * 1,
                                ...theme.FONTS.Lato_400Regular,
                            }}
                            placeholderTextColor={theme.COLORS.black}
                        />
                    </View>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            height: 60,
                            width: "100%",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: theme.COLORS.white,
                            marginBottom: 10,
                        }}
                    >
                        <TextInput
                            placeholder="MM/YY"
                            style={{
                                flex: 1,
                                height: "100%",
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: 16,
                                lineHeight: 16 * 1,
                                ...theme.FONTS.Lato_400Regular,
                            }}
                            placeholderTextColor={theme.COLORS.black}
                        />
                    </View>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            height: 60,
                            width: "100%",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: theme.COLORS.white,
                            marginBottom: 10,
                        }}
                    >
                        <TextInput
                            placeholder="CVV"
                            style={{
                                flex: 1,
                                height: "100%",
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: 16,
                                lineHeight: 16 * 1,
                                ...theme.FONTS.Lato_400Regular,
                            }}
                            placeholderTextColor={theme.COLORS.black}
                        />
                    </View>
                    <components.Button
                        title="save card"
                        onPress={() => navigation.navigate("PaymentMethod")}
                    />
                </View>
            </KeyboardAwareScrollView>
        );
    };

    return (
        <SafeAreaView style={{ ...theme.COLORS.backgroundColorWhite, flex: 1 }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default NewCard;
