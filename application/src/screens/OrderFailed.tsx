import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const OrderFailed: React.FC = ({ navigation }: any) => {
    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <components.BgElementBig
                    containerStyle={{ marginTop: 75, marginBottom: 30 }}
                    icon={<svg.OrderFailedSvg />}
                />
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            ...theme.FONTS.H2,
                            textAlign: "center",
                            textTransform: "capitalize",
                            color: theme.COLORS.black,
                            marginBottom: 14,
                        }}
                    >
                        Sorry! Your order has {"\n"}failed!
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            marginBottom: 30,
                        }}
                    >
                        Something went wrong. Please try again {"\n"}to contimue
                        your order.
                    </Text>
                    <components.Button
                        title="try again"
                        containerStyle={{ marginBottom: 10 }}
                        onPress={() => navigation.navigate("Checkout")}
                    />
                    <components.Button
                        title="go to my profile"
                        containerStyle={{ backgroundColor: "white" }}
                        textStyle={{ color: theme.COLORS.black }}
                        onPress={() =>
                            navigation.navigate("Tabs", { screen: "Profile" })
                        }
                    />
                </View>
            </ScrollView>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                ...theme.COLORS.backgroundColorPastel,
            }}
        >
            {renderContent()}
        </SafeAreaView>
    );
};

export default OrderFailed;
