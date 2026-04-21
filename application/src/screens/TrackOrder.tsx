import {
    View,
    Text,
    ScrollView,
    StatusBar,
    ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const TrackOrder: React.FC = () => {
    const renderStatusBar = () => {
        return (
            <StatusBar
                animated={true}
                backgroundColor={theme.COLORS.pastel}
                barStyle={"dark-content"}
                translucent={true}
            />
        );
    };

    const renderHeader = () => {
        return (
            <components.Header
                goBack={true}
                title="Track Your Order"
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 25,
                }}
                showsVerticalScrollIndicator={false}
            >
                <components.BgElementSmall
                    icon={<svg.PackageSvg />}
                    containerStyle={{ marginTop: 17, marginBottom: 20 }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        ...theme.FONTS.H3,
                        textTransform: "capitalize",
                        marginBottom: 4,
                    }}
                >
                    Your order:
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...theme.FONTS.textStyle16,
                        color: theme.COLORS.gray,
                        marginBottom: 20,
                    }}
                >
                    {"#205479"}
                </Text>
                <View style={{ alignSelf: "center", paddingRight: 54 }}>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <svg.TrackElement
                            lineColor="#D05278"
                            fillColor="#222222"
                            strokeColor="#999999"
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Text
                                style={{
                                    ...theme.FONTS.H5,
                                    color: theme.COLORS.black,
                                    marginBottom: 6,
                                }}
                            >
                                Order created
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle14,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                We have received your order
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <svg.TrackElement
                            lineColor="#D05278"
                            fillColor="#222222"
                            strokeColor="#999999"
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Text
                                style={{
                                    ...theme.FONTS.H5,
                                    color: theme.COLORS.black,
                                    marginBottom: 6,
                                }}
                            >
                                Order confirmed
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle14,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                Your order has been confirmed
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <svg.TrackElement
                            lineColor="#D05278"
                            fillColor="#D05278"
                            strokeColor="#D05278"
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Text
                                style={{
                                    ...theme.FONTS.H5,
                                    color: theme.COLORS.black,
                                    marginBottom: 6,
                                }}
                            >
                                Order shipping
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle14,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                Estimated for Jul 12, 2022
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <svg.TrackElement
                            lineColor="#D05278"
                            strokeColor="#999999"
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Text
                                style={{
                                    ...theme.FONTS.H5,
                                    color: theme.COLORS.black,
                                    marginBottom: 6,
                                }}
                            >
                                Courier delivering
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle14,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                Estimated for Jul 15, 2022
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <svg.TrackElement strokeColor="#999999" />
                        <View style={{ marginLeft: 24 }}>
                            <Text
                                style={{
                                    ...theme.FONTS.H5,
                                    color: theme.COLORS.black,
                                    marginBottom: 6,
                                }}
                            >
                                Receiving
                            </Text>
                            <Text
                                style={{
                                    ...theme.FONTS.textStyle14,
                                    color: theme.COLORS.gray,
                                }}
                            >
                                Estimated for Jul 15, 2022
                            </Text>
                        </View>
                    </View>
                </View>
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

export default TrackOrder;
