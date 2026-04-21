import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "react-native-collapsible/Accordion";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const orderHistory = [
    {
        id: "1",
        number: "205479",
        date: "Jul 12, 2022 at 7:48 PM",
        total: "568.92",
        status: "Shipping",
        products: [
            {
                id: "1",
                productName: "Foundation Beshop",
                price: "1 x $401.90",
            },
            {
                id: "2",
                productName: "Hair mask with oat extract",
                price: "1 x $125.95",
            },
            {
                id: "3",
                productName: "Spray balm with oat extract",
                price: "1 x $60.95",
            },
        ],
    },
    {
        id: "2",
        number: "198452",
        date: "Jun 26, 2022 at 3:16 PM",
        total: "588.80",
        status: "Delivered",
        products: [
            {
                id: "1",
                productName: "Foundation Beshop",
                price: "1 x $401.90",
            },
            {
                id: "2",
                productName: "Hair mask with oat extract",
                price: "1 x $125.95",
            },
            {
                id: "3",
                productName: "Spray balm with oat extract",
                price: "1 x $60.95",
            },
        ],
    },
    {
        id: "3",
        number: "165743",
        date: "Jun 10, 2022 at 1:54 PM",
        total: "421.67",
        status: "Delivered",
        products: [
            {
                id: "1",
                productName: "Foundation Beshop",
                price: "1 x $401.90",
            },
            {
                id: "2",
                productName: "Hair mask with oat extract",
                price: "1 x $125.95",
            },
            {
                id: "3",
                productName: "Spray balm with oat extract",
                price: "1 x $60.95",
            },
        ],
    },
    {
        id: "4",
        number: "116878",
        date: "May 22, 2022 at 2:27 PM",
        total: "367.24",
        status: "Canceled",
        products: [
            {
                id: "1",
                productName: "Foundation Beshop",
                price: "1 x $401.90",
            },
            {
                id: "2",
                productName: "Hair mask with oat extract",
                price: "1 x $125.95",
            },
            {
                id: "3",
                productName: "Spray balm with oat extract",
                price: "1 x $60.95",
            },
        ],
    },
    {
        id: "5",
        number: "108479",
        date: "May 02, 2022 at 9:31 AM",
        total: "157.35",
        status: "Delivered",
        products: [
            {
                id: "1",
                productName: "Foundation Beshop",
                price: "1 x $401.90",
            },
            {
                id: "2",
                productName: "Hair mask with oat extract",
                price: "1 x $125.95",
            },
            {
                id: "3",
                productName: "Spray balm with oat extract",
                price: "1 x $60.95",
            },
        ],
    },
];

const OrderHistory: React.FC = () => {
    const [activeSections, setActiveSections] = useState([]);

    const setSections = (sections: any) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

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
                title="Order history"
                goBack={true}
                containerStyle={{ ...theme.COLORS.backgroundColorPastel }}
            />
        );
    };

    function accordionHeader(section: any) {
        return (
            <View
                style={{
                    width: "100%",
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    paddingBottom: 20,
                    borderWidth: 1,
                    borderColor: "#EEEEEE",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 7,
                    }}
                >
                    <Text
                        style={{
                            ...theme.FONTS.H5,
                            color: theme.COLORS.black,
                        }}
                    >
                        #{section.number}
                    </Text>
                    {section.status == "Shipping" && <svg.OnItSWaySvg />}
                    {section.status == "Delivered" && <svg.DeliveredSvg />}
                    {section.status == "Canceled" && <svg.CanceledSvg />}
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            color: theme.COLORS.gray,
                            ...theme.FONTS.Lato_400Regular,
                            fontSize: 12,
                            lineHeight: 12 * 1.5,
                        }}
                    >
                        {section.date}
                    </Text>
                    <Text
                        style={{
                            ...theme.FONTS.Lato_700Bold,
                            fontSize: 12,
                            color: theme.COLORS.black,
                            lineHeight: 12 * 1.5,
                        }}
                    >
                        ${section.total}
                    </Text>
                </View>
            </View>
        );
    }

    const accordionContent = (section: any) => {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: "#F4F7FC",
                    borderWidth: 1,
                    borderColor: "#EEEEEE",
                    borderTopWidth: 0,
                }}
            >
                {section.products.map((item: any) => (
                    <View
                        key={item.id}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 6,
                        }}
                    >
                        <Text
                            style={{
                                ...theme.FONTS.textStyle14,
                                color: theme.COLORS.gray,
                            }}
                        >
                            {item.productName}
                        </Text>
                        <Text
                            style={{
                                ...theme.FONTS.textStyle14,
                                color: theme.COLORS.gray,
                            }}
                        >
                            ${item.price}
                        </Text>
                    </View>
                ))}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 30,
                    }}
                >
                    <TouchableOpacity>
                        <svg.RepeatOrderSvg />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <svg.LeaveAReviewSvg />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 25,
                    backgroundColor: theme.COLORS.white,
                }}
            >
                <Accordion
                    activeSections={activeSections}
                    sections={orderHistory}
                    touchableComponent={TouchableOpacity}
                    renderHeader={accordionHeader}
                    renderContent={accordionContent}
                    duration={400}
                    sectionContainerStyle={{
                        marginBottom: 8,
                    }}
                    onChange={setSections}
                />
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

export default OrderHistory;
