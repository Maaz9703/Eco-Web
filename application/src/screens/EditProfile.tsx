import { View, ScrollView, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AutoHeightImage from "react-native-auto-height-image";

import { theme } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const EditProfile: React.FC = ({ navigation }: any) => {
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
        return <components.Header title="Edit profile" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: theme.COLORS.pastel,
                    marginHorizontal: 20,
                    paddingHorizontal: 20,
                    marginTop: 10,
                    paddingTop: theme.SIZES.height * 0.08,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        position: "absolute",
                        top: theme.SIZES.height * 0.14,
                    }}
                >
                    <AutoHeightImage
                        width={theme.SIZES.width - 40}
                        source={require("../assets/bg-01.png")}
                    />
                </View>
                <View
                    style={{
                        width: 120,
                        height: 120,
                        alignSelf: "center",
                        borderWidth: 6,
                        borderRadius: 60,
                        borderColor: theme.COLORS.accent,
                        marginBottom: 30,
                    }}
                >
                    <Image
                        source={{
                            uri: "https://via.placeholder.com/312x324/F9F8FE/?text=PHOTO",
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 60,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            right: -18,
                            bottom: -18,
                        }}
                    >
                        <svg.CameraSvg />
                    </View>
                </View>
                <components.InputField
                    placeholder="Kristin Watson"
                    containerStyle={{ marginBottom: 10 }}
                />
                <components.InputField
                    placeholder="kristinwatson@mail.com"
                    containerStyle={{ marginBottom: 10 }}
                />
                <components.InputField
                    placeholder="Kristin Watson"
                    containerStyle={{ marginBottom: 10 }}
                />
                <components.InputField
                    placeholder="Kristin Watson"
                    containerStyle={{ marginBottom: 19 }}
                />
                <components.Button
                    title="save changes"
                    onPress={() => navigation.navigate("Tabs")}
                />
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default EditProfile;
