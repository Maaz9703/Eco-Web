import {
    View,
    Text,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const cards = [
    {
        id: "1",
        card: "https://dl.dropbox.com/s/rcw8ufhhvseh89e/card-01.png?dl=0",
    },
    {
        id: "2",
        card: "https://dl.dropbox.com/s/mmdy6yji6ngj8rh/card-02.png?dl=0",
    },
    {
        id: "3",
        card: "https://dl.dropbox.com/s/l6mahvlqwmdxqc6/card-03.png?dl=0",
    },
];

const PaymentMethod: React.FC = ({ navigation }: any) => {
    const renderStatusBar = () => {
        return (
            <StatusBar
                animated={true}
                backgroundColor={theme.COLORS.pastel}
                barStyle={"dark-content"}
            />
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                title="Payment method"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 20,
                    backgroundColor: theme.COLORS.white,
                }}
            >
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            ...theme.FONTS.H5,
                            color: theme.COLORS.black,
                            paddingBottom: 8,
                            marginBottom: 18,
                            borderBottomWidth: 2,
                            borderBottomColor: theme.COLORS.black,
                        }}
                    >
                        Cards
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {cards.map((item, index) => {
                            return (
                                <View key={index} style={{ marginRight: 14 }}>
                                    <Image
                                        source={{ uri: item.card }}
                                        style={{ width: 279, height: 170 }}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            borderWidth: 1,
                            borderColor: "#EEEEEE",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 60,
                            paddingHorizontal: 20,
                            marginBottom: 8,
                        }}
                    >
                        <svg.ApplePaySvg />
                        <svg.MethodEditSvg />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            borderWidth: 1,
                            borderColor: "#EEEEEE",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 60,
                            paddingHorizontal: 20,
                            marginBottom: 8,
                        }}
                    >
                        <svg.PayPalSvg />
                        <svg.MethodEditSvg />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            borderWidth: 1,
                            borderColor: "#EEEEEE",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 60,
                            paddingHorizontal: 20,
                        }}
                    >
                        <svg.PayoneerSvg />
                        <svg.MethodPlusSvg />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        marginTop: theme.SIZES.height * 0.1,
                        marginBottom: 20,
                        alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("NewCard")}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#EEEEEE",
                            marginBottom: 10,
                        }}
                    >
                        <svg.NewCardPlusSvg />
                    </View>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle14,
                            color: theme.COLORS.gray,
                        }}
                    >
                        Add a new card
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{ ...theme.COLORS.backgroundColorPastel, flex: 1 }}
        >
            {renderStatusBar()}
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default PaymentMethod;
