import { View, StatusBar, Platform } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";

const Categories: React.FC = ({ navigation }: any) => {
    const renderStatusBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: theme.SIZES.STATUS_BAR_HEIGHT,
                    backgroundColor: "#fff",
                    zIndex: 99999,
                }}
            >
                <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="My address"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorWhite }}
            />
        );
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: 29,
                    flexGrow: 1,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <components.InputField
                    placeholder="Mom"
                    containerStyle={{
                        backgroundColor: theme.COLORS.lightBlue,
                        borderWidth: 1,
                        borderColor: "#EEEEEE",
                        marginBottom: 10,
                    }}
                />
                <components.InputField
                    placeholder="3646 S 58th Ave, Cicero, IL 60804"
                    containerStyle={{
                        backgroundColor: theme.COLORS.lightBlue,
                        borderWidth: 1,
                        borderColor: "#EEEEEE",
                        marginBottom: 30,
                    }}
                />
                <components.Button
                    title="save address"
                    onPress={() => navigation.navigate("MyAddress")}
                />
            </KeyboardAwareScrollView>
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

export default Categories;
