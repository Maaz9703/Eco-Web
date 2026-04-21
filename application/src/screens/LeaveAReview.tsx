import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const LeaveAReview: React.FC = ({ navigation }: any) => {
    const renderHeader = () => {
        return <components.Header title="Leave a review" goBack={true} />;
    };

    const renderContent = () => {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 27,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <components.BgElementSmall
                    icon={<svg.PackageSvg />}
                    containerStyle={{ marginTop: 27, marginBottom: 30 }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 20,
                        ...theme.FONTS.H2,
                        color: theme.COLORS.black,
                        textTransform: "capitalize",
                    }}
                >
                    Please rate the quality of {"\n"}service for the order!
                </Text>
                <TouchableOpacity
                    style={{ marginBottom: 25, alignSelf: "center" }}
                >
                    <svg.RatingSvg />
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 30,
                        ...theme.FONTS.textStyle16,
                        color: theme.COLORS.gray,
                    }}
                >
                    Your comments and suggestions help us {"\n"}improve the
                    service quality better!
                </Text>
                <View
                    style={{
                        marginBottom: 20,
                        backgroundColor: theme.COLORS.white,
                        paddingVertical: 16,
                        paddingHorizontal: 30,
                        height: 130,
                        width: "100%",
                    }}
                >
                    <TextInput
                        placeholder="Enter your comment"
                        style={{ flex: 1 }}
                        multiline={true}
                        numberOfLines={5}
                        textAlignVertical="top"
                    />
                </View>
                <components.Button
                    title="submit"
                    onPress={() => navigation.navigate("Reviews")}
                />
            </KeyboardAwareScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: theme.COLORS.pastel,
            }}
        >
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default LeaveAReview;
