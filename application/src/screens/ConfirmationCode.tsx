import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import AutoHeightImage from "react-native-auto-height-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";

const ConfirmationCode: React.FC = ({ navigation }: any) => {
    const renderHeader = () => {
        return (
            <components.Header
                title={"Verify your phone number"}
                goBack={true}
            />
        );
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 10,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        ...theme.COLORS.backgroundColorPastel,
                        paddingHorizontal: 20,
                        paddingTop: 30,
                        paddingBottom: 50,
                    }}
                >
                    <AutoHeightImage
                        width={theme.SIZES.width - 40}
                        source={require("../assets/bg-08.png")}
                        style={{
                            position: "absolute",
                            bottom: 0,
                        }}
                    />
                    <Text
                        style={{
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            marginBottom: 30,
                        }}
                    >
                        Enter your OTP code here.
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#fff",
                                width: 50,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#FCEDEA",
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    flex: 1,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                width: 50,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#FCEDEA",
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    flex: 1,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                width: 50,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#FCEDEA",
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    flex: 1,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                width: 50,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#FCEDEA",
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    flex: 1,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                width: 50,
                                height: 50,
                                borderWidth: 1,
                                borderColor: "#FCEDEA",
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    flex: 1,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            marginBottom: 30,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.textStyle16,
                                color: theme.COLORS.gray,
                            }}
                        >
                            Didn’t receive the OTP?{" "}
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle16,
                                    color: theme.COLORS.accent,
                                }}
                            >
                                Resend.
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <components.Button
                        title="verify"
                        onPress={() => navigation.navigate("Tabs")}
                    />
                </View>
            </KeyboardAwareScrollView>
        );
    };

    return (
        <SafeAreaView style={{ ...theme.COLORS.backgroundColorWhite, flex: 1 }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default ConfirmationCode;
