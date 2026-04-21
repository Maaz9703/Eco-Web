import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const SentEmail: React.FC = ({ navigation }: any) => {
    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 16,
                    paddingBottom: 25,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignSelf: "center", marginBottom: 14 }}>
                    <svg.BigLogoSvg />
                </View>
                <View
                    style={{
                        height: 319,
                        paddingHorizontal: 14,
                        marginBottom: 30,
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
                        <View style={{ position: "absolute", bottom: 0 }}>
                            <svg.KeySvg />
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            ...theme.FONTS.H2,
                            textAlign: "center",
                            color: theme.COLORS.black,
                            textTransform: "capitalize",
                            marginBottom: 14,
                        }}
                    >
                        Your password has {"\n"} been reset!
                    </Text>
                    <Text
                        style={{
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            textAlign: "center",
                            marginBottom: 30,
                        }}
                    >
                        Qui ex aute ipsum duis. Incididunt {"\n"} adipisicing
                        voluptate laborum
                    </Text>
                    <components.Button
                        title="done"
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.pastel }}>
            {renderContent()}
        </SafeAreaView>
    );
};

export default SentEmail;
