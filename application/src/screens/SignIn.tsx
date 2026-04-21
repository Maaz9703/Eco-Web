import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AutoHeightImage from "react-native-auto-height-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const SignIn: React.FC = ({ navigation }: any) => {
    const [rememberMe, setRememberMe] = useState(false);

    const renderHeader = () => {
        return <components.Header title="Sign in" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: theme.COLORS.pastel,
                    marginHorizontal: 20,
                    marginTop: 10,
                    paddingTop: theme.SIZES.height * 0.08,
                    paddingBottom: 40,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        position: "absolute",
                        top: theme.SIZES.height * 0.08,
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
                        Welcome Back!
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
                        placeholder="kristinwatson@mail.com"
                        containerStyle={{ marginBottom: 10 }}
                        icon={
                            <View style={{ paddingHorizontal: 20 }}>
                                <svg.InputCheckSvg />
                            </View>
                        }
                    />
                    <components.InputField
                        placeholder="••••••••"
                        containerStyle={{ marginBottom: 20 }}
                        secureTextEntry={true}
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
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 19,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderWidth: 1,
                                    borderColor: "#EEEEEE",
                                    backgroundColor: theme.COLORS.white,
                                    marginRight: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {rememberMe && (
                                    <View
                                        style={{
                                            width: 8,
                                            height: 8,
                                            backgroundColor:
                                                theme.COLORS.accent,
                                        }}
                                    />
                                )}
                            </View>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle16,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                Remember me
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ForgotPassword")
                            }
                        >
                            <Text
                                style={{
                                    ...theme.FONTS.Lato_400Regular,
                                    fontSize: 16,
                                    color: theme.COLORS.accent,
                                    lineHeight: 16 * 1.7,
                                }}
                            >
                                Lost your password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <components.Button
                        title="Sign in"
                        containerStyle={{ marginBottom: 21 }}
                        onPress={() => navigation.navigate("Tabs")}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.textStyle16,
                                color: theme.COLORS.gray,
                                lineHeight: 16 * 1.7,
                            }}
                        >
                            No account?{" "}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle16,
                                    color: theme.COLORS.accent,
                                    lineHeight: 16 * 1.7,
                                }}
                            >
                                Register now
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

export default SignIn;
