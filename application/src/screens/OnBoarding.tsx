import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../constants";
import { svg } from "../svg";

const onBoardingSlides = [
    {
        id: "1",
        image: {
            uri: "https://via.placeholder.com/1125x1494/F9F8FE/?text=IMAGE",
        },
        title: "Welcome to \nBeshop!",
        description:
            "Labore sunt culpa excepteur culpa ipsum. \nLabore occaecat ex nisi mollit.",
    },
    {
        id: "2",
        image: {
            uri: "https://via.placeholder.com/1125x1494/F9F8FE/?text=IMAGE",
        },
        title: "Easy Track \nOrder!",
        description:
            "Labore sunt culpa excepteur culpa ipsum. \nLabore occaecat ex nisi mollit.",
    },
    {
        id: "3",
        image: {
            uri: "https://via.placeholder.com/1125x1494/F9F8FE/?text=IMAGE",
        },
        title: "Door to Door \nDelivery!",
        description:
            "Labore sunt culpa excepteur culpa ipsum. \nLabore occaecat ex nisi mollit.",
    },
];

const OnBoarding: React.FC = ({ navigation }: any) => {
    const renderContent = () => {
        return (
            <FlatList
                data={onBoardingSlides}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: theme.SIZES.height * 0.1,
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ width: theme.SIZES.width }}>
                            <Image
                                source={require("../assets/bg-07.png")}
                                style={{
                                    width: 210,
                                    height: 181,
                                    alignSelf: "center",
                                    position: "absolute",
                                    marginTop: 10,
                                }}
                            />
                            <View
                                style={{
                                    alignSelf: "center",
                                    marginBottom: 13.27,
                                }}
                            >
                                {<svg.BigLogoSvg />}
                            </View>
                            <Text
                                style={{
                                    paddingHorizontal: 20,
                                    ...theme.FONTS.H1,
                                    textAlign: "center",
                                    marginBottom: 14,
                                    color: theme.COLORS.black,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle16,
                                    textAlign: "center",
                                    color: theme.COLORS.gray,
                                }}
                            >
                                {item.description}
                            </Text>
                            <View
                                style={{ height: theme.SIZES.height * 0.055 }}
                            />
                            <Image
                                source={item.image}
                                style={{
                                    width: "100%",
                                    height: 498,
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    );
                }}
            />
        );
    };

    const renderButton = () => {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                    position: "absolute",
                    bottom: 54,
                    width: "100%",
                }}
            >
                <TouchableOpacity
                    style={{
                        width: "100%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: theme.COLORS.black,
                    }}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text
                        style={{
                            color: theme.COLORS.white,
                            textTransform: "uppercase",
                            fontSize: 14,
                            ...theme.FONTS.Lato_400Regular,
                        }}
                    >
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{ ...theme.COLORS.backgroundColorPastel, flex: 1 }}>
            {renderContent()}
            {renderButton()}
        </View>
    );
};

export default OnBoarding;
