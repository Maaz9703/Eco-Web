import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const comments = [
    {
        name: "Annette Black",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Jenny Wilson",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Cameron Williamson",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
    {
        name: "Theresa Webb",
        photo: { uri: "https://via.placeholder.com/312x324" },
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 5,
    },
];

const Reviews: React.FC = ({ navigation }: any) => {
    const renderStatusBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: theme.SIZES.STATUS_BAR_HEIGHT,
                    backgroundColor: theme.COLORS.pastel,
                }}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={theme.COLORS.pastel}
                />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title={"Reviews"}
                goBack={true}
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 25,
                }}
            >
                {comments.map((item, index, array) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: "100%",
                                height: 153,
                                backgroundColor: theme.COLORS.white,
                                borderWidth: 1,
                                borderColor: "#EEEEEE",
                                marginBottom:
                                    item === comments[array.length - 1]
                                        ? 25
                                        : 8,
                                padding: 20,
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                source={item.photo}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    marginRight: 14,
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...theme.FONTS.H5,
                                            marginBottom: 6,
                                            color: theme.COLORS.black,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <svg.StarSvg />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                ...theme.FONTS.Lato_400Regular,
                                                fontSize: 12,
                                                color: theme.COLORS.gray,
                                                lineHeight: 12 * 1.7,
                                            }}
                                        >
                                            {item.rating}.0
                                        </Text>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        ...theme.FONTS.Lato_400Regular,
                                        fontSize: 10,
                                        color: "#999999",
                                        lineHeight: 10 * 1.5,
                                        marginBottom: 10,
                                    }}
                                >
                                    {item.date}
                                </Text>
                                <Text
                                    style={{
                                        ...theme.FONTS.textStyle14,
                                        color: theme.COLORS.gray,
                                    }}
                                >
                                    {item.comment}
                                </Text>
                            </View>
                        </View>
                    );
                })}
                <components.Button
                    title="Leave a review"
                    onPress={() => navigation.navigate("LeaveAReview")}
                />
            </ScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: theme.COLORS.white,
            }}
            forceInset={{ top: "never" }}
        >
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default Reviews;
