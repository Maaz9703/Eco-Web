import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import Modal from "react-native-modal";

import { theme } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const Profile: React.FC = ({ navigation }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
                title="My profile"
                logo={true}
                bag={true}
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
                    paddingHorizontal: 20,
                    paddingTop: theme.SIZES.height * 0.04,
                }}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={{
                        width: 106,
                        height: 106,
                        alignSelf: "center",
                        borderWidth: 6,
                        borderRadius: 53,
                        borderColor: theme.COLORS.accent,
                        marginBottom: 14,
                    }}
                    onPress={() => navigation.navigate("EditProfile")}
                >
                    <Image
                        source={{ uri: "https://via.placeholder.com/312x324" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 53,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            right: -14,
                            bottom: -4,
                        }}
                    >
                        <svg.EditSvg />
                    </View>
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: "center",
                        ...theme.FONTS.H3,
                        color: theme.COLORS.black,
                        marginBottom: 4,
                    }}
                >
                    Kristin Watson
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...theme.FONTS.textStyle14,
                        color: theme.COLORS.gray,
                        marginBottom: 20,
                    }}
                >
                    kristinwatson@mail.com
                </Text>
                <components.ProfileCategory
                    icon={<svg.CalendarSvg />}
                    title="Order history"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("OrderHistory")}
                />
                <components.ProfileCategory
                    icon={<svg.CreditCardSvg />}
                    title="Payment method"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("PaymentMethod")}
                />
                <components.ProfileCategory
                    icon={<svg.PinSvg />}
                    title="My address"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("MyAddress")}
                />
                <components.ProfileCategory
                    icon={<svg.GiftSvg />}
                    title="My promocodes"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("MyPromocodes")}
                />
                <components.ProfileCategory
                    icon={<svg.TruckSvg />}
                    title="Track my order"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("TrackOrder")}
                />
                <components.ProfileCategory
                    icon={<svg.FAQSvg />}
                    title="FAQ"
                    containerStyle={{ marginBottom: 8 }}
                    onPress={() => navigation.navigate("FAQ")}
                    textStyle={{ textTransform: "uppercase" }}
                />
                <components.ProfileCategory
                    icon={<svg.LogOutSvg />}
                    arrow={false}
                    title="Sign out"
                    onPress={() => setIsModalVisible(true)}
                />
            </ScrollView>
        );
    };

    const renderSignOut = () => {
        return (
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View
                    style={{
                        width: theme.SIZES.width - 40,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: theme.COLORS.pastel,
                        paddingHorizontal: 20,
                        paddingBottom: 40,
                        paddingTop: 44,
                    }}
                >
                    <ImageBackground
                        source={require("../assets/bg-06.png")}
                        style={{
                            width: 204.25,
                            height: 176,
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 36,
                        }}
                    >
                        <Image
                            source={{
                                uri: "https://via.placeholder.com/306x408",
                            }}
                            style={{ width: 102, height: 136 }}
                        />
                        <View style={{ position: "absolute", bottom: -20 }}>
                            <svg.SignOutSvg />
                        </View>
                    </ImageBackground>
                    <Text
                        style={{
                            textAlign: "center",
                            ...theme.FONTS.H3,
                            color: theme.COLORS.black,
                            marginBottom: 20,
                        }}
                    >
                        Are you sure you want {"\n"} to sign out ?
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "48%",
                                height: 60,
                                backgroundColor: theme.COLORS.white,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#EEEEEE",
                            }}
                            onPress={() => {
                                setIsModalVisible(false);
                                navigation.navigate("SignIn");
                            }}
                        >
                            <Text
                                style={{
                                    textTransform: "uppercase",
                                    ...theme.FONTS.Lato_400Regular,
                                    fontSize: 14,
                                }}
                            >
                                sure
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "48%",
                                height: 60,
                                backgroundColor: theme.COLORS.black,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text
                                style={{
                                    color: theme.COLORS.white,
                                    textTransform: "uppercase",
                                    ...theme.FONTS.Lato_400Regular,
                                    fontSize: 14,
                                }}
                            >
                                cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
            {renderSignOut()}
        </SafeAreaView>
    );
};

export default Profile;
