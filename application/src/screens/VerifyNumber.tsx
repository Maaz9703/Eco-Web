import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AutoHeightImage from "react-native-auto-height-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PhoneInput from "react-native-phone-input";

import { components } from "../components";
import { theme } from "../constants";

const VerifyNumber: React.FC = ({ navigation }: any) => {
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
                        We have sent you an SMS with a code to number +17
                        0123456789.
                    </Text>
                    <PhoneInput
                        style={{
                            ...theme.COLORS.backgroundColorWhite,
                            paddingVertical: 16,
                            paddingHorizontal: 30,
                            marginBottom: 20,
                        }}
                        initialCountry={"us"}
                        initialValue="123456789"
                        textStyle={{
                            ...theme.FONTS.Lato_400Regular,
                            fontSize: 16,
                            color: theme.COLORS.black,
                        }}
                    />
                    <components.Button
                        title="confirm"
                        onPress={() => navigation.navigate("ConfirmationCode")}
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

export default VerifyNumber;
