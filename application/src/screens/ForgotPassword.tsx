import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AutoHeightImage from "react-native-auto-height-image";

import { components } from "../components";
import { theme } from "../constants";

const ForgotPassword: React.FC = ({ navigation }: any) => {
    const renderHeader = () => {
        return <components.Header title="Forgot password" goBack={true} />;
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
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                    </Text>
                    <components.InputField
                        placeholder="kristinwatson@mail.com"
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <components.Button
                        title="send"
                        onPress={() => navigation.navigate("NewPassword")}
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

export default ForgotPassword;
