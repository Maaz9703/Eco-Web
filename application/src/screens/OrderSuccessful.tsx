import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const OrderSuccessful: React.FC = ({ navigation }: any) => {
    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <components.BgElementBig
                    containerStyle={{ marginTop: 75, marginBottom: 30 }}
                    icon={<svg.OrderSuccessSvg />}
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
                        Thank you for your order!
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.textStyle16,
                            color: theme.COLORS.gray,
                            marginBottom: 30,
                        }}
                    >
                        Your order will be delivered on time.
                        {"\n"}Thank you!
                    </Text>
                    <components.Button
                        title="View orders"
                        containerStyle={{ marginBottom: 10 }}
                        onPress={() => navigation.navigate("OrderHistory")}
                    />
                    <components.Button
                        title="Continue Shopping"
                        containerStyle={{ backgroundColor: "white" }}
                        textStyle={{ color: theme.COLORS.black }}
                        onPress={() => navigation.navigate("Tabs")}
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

export default OrderSuccessful;
