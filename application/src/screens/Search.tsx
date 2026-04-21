import {
    View,
    Text,
    StatusBar,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";

import { components } from "../components";
import { theme, products } from "../constants";

const categories = [
    {
        id: "1",
        category: "SPA",
        image: "https://dl.dropbox.com/s/8us5bmswfp64n4w/spa.png?dl=0",
    },
    {
        id: "2",
        category: "Nails",
        image: "https://dl.dropbox.com/s/1n8enx8908d7acw/nails.png?dl=0",
    },
    {
        id: "3",
        category: "Perfum",
        image: "https://dl.dropbox.com/s/9jqh4en2syf433m/perfum.png?dl=0",
    },
    {
        id: "4",
        category: "Skin Care",
        image: "https://dl.dropbox.com/s/oejj0cwq1pyrlib/skin-care.png?dl=0",
    },
    {
        id: "5",
        category: "Hair Care",
        image: "https://dl.dropbox.com/s/06q93bsx1gs5lsc/hair-care.png?dl=0",
    },
    {
        id: "6",
        category: "Face Care",
        image: "https://dl.dropbox.com/s/f7h0dfvkdwsw26z/face-care.png?dl=0",
    },
];

const Search: React.FC = ({ navigation }: any) => {
    const renderStatusBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: theme.SIZES.STATUS_BAR_HEIGHT,
                    backgroundColor: theme.COLORS.pastel,
                }}
            >
                <StatusBar barStyle="dark-content" />
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                bag={true}
                goBack={true}
                search={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 15,
                    paddingBottom: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    {categories.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: "48%",
                                    height: 200,
                                    marginBottom: 15,
                                }}
                                onPress={() =>
                                    navigation.navigate("Shop", {
                                        title: item.category,
                                        categoryProducts: products,
                                    })
                                }
                            >
                                <ImageBackground
                                    source={{ uri: item.image }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: theme.COLORS.white,
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...theme.FONTS.H5,
                                                color: theme.COLORS.black,
                                            }}
                                        >
                                            {item.category}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        );
                    })}
                </View>
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

export default Search;
