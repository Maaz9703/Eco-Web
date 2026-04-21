import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AutoHeightImage from "react-native-auto-height-image";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const SignUp: React.FC = ({ navigation }: any) => {
    const renderHeader = () => {
        return <components.Header title="Sign up" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: theme.COLORS.pastel,
                    marginHorizontal: 20,
                    marginTop: 10,
                    paddingTop: theme.SIZES.height * 0.075,
                    paddingBottom: 40,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        position: "absolute",
                        top: theme.SIZES.height * 0.135,
                    }}
                >
                    <AutoHeightImage
                        width={theme.SIZES.width - 40}
                        source={require("../assets/bg-01.png")}
                    />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            color: theme.COLORS.black,
                            textAlign: "center",
                            ...theme.FONTS.H1,
                            textTransform: "capitalize",
                            marginBottom: 14,
                        }}
                    >
                        Sign up
                    </Text>
                    <Text
                        style={{
                            ...theme.FONTS.Lato_400Regular,
                            fontSize: 16,
                            textAlign: "center",
                            lineHeight: 16 * 1.7,
                            color: theme.COLORS.gray,
                            marginBottom: 31,
                        }}
                    >
                        Use social networks or your email
                    </Text>
                    <components.Social />
                    <components.InputField
                        placeholder="Kristin Watason"
                        containerStyle={{ marginBottom: 10 }}
                    />
                    <components.InputField
                        placeholder="Enter your email"
                        containerStyle={{ marginBottom: 10 }}
                        icon={
                            <View style={{ paddingHorizontal: 20 }}>
                                {/* <InputCheckSvg /> */}
                            </View>
                        }
                    />
                    <components.InputField
                        placeholder="Enter your password"
                        containerStyle={{ marginBottom: 10 }}
                        icon={
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                }}
                            >
                                <svg.EyeOffSvg />
                            </TouchableOpacity>
                        }
                    />
                    <components.InputField
                        placeholder="Confirm your password"
                        containerStyle={{ marginBottom: 20 }}
                        icon={
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                }}
                            >
                                <svg.EyeOffSvg />
                            </TouchableOpacity>
                        }
                    />
                    <components.Button
                        title="Sign up"
                        containerStyle={{ marginBottom: 20 }}
                        onPress={() => navigation.navigate("AccountCreated")}
                    />
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.textStyle16,
                                color: theme.COLORS.gray,
                            }}
                        >
                            Already have an account?{" "}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle16,
                                    color: theme.COLORS.accent,
                                }}
                            >
                                Sign in.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default SignUp;
