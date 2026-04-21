import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AutoHeightImage from "react-native-auto-height-image";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const NewPassword: React.FC = ({ navigation }: any) => {
    const renderHeader = () => {
        return <components.Header title="Reset password" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    flexGrow: 1,
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
                        marginTop: 10,
                    }}
                >
                    <AutoHeightImage
                        width={theme.SIZES.width - 40}
                        source={require("../assets/bg-02.png")}
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
                        Enter new password and confirm.
                    </Text>
                    <components.InputField
                        placeholder="••••••••"
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
                        title="change password"
                        onPress={() => navigation.navigate("SentEmail")}
                    />
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

export default NewPassword;
