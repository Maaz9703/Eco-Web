import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../constants";
import { screens } from "../screens";

import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions={{
                gestureEnabled: false,
                cardStyle: { backgroundColor: theme.COLORS.white },
            }}
        >
            <Stack.Screen
                name="OnBoarding"
                component={screens.OnBoarding}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Tabs"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={screens.SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={screens.SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NewPassword"
                component={screens.NewPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={screens.ForgotPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SentEmail"
                component={screens.SentEmail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AccountCreated"
                component={screens.AccountCreated}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PhoneNumber"
                component={screens.PhoneNumber}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmationCode"
                component={screens.ConfirmationCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Product"
                component={screens.Product}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Reviews"
                component={screens.Reviews}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LeaveAReview"
                component={screens.LeaveAReview}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Filter"
                component={screens.Filter}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={screens.Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditProfile"
                component={screens.EditProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CheckoutPayment"
                component={screens.CheckoutPayment}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PaymentMethod"
                component={screens.PaymentMethod}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NewCard"
                component={screens.NewCard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyAddress"
                component={screens.MyAddress}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderHistory"
                component={screens.OrderHistory}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TrackOrder"
                component={screens.TrackOrder}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Order"
                component={screens.Order}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Checkout"
                component={screens.Checkout}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ShippingDetails"
                component={screens.ShippingDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderSuccessful"
                component={screens.OrderSuccessful}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderFailed"
                component={screens.OrderFailed}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Shop"
                component={screens.Shop}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FAQ"
                component={screens.FAQ}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="VerifyNumber"
                component={screens.VerifyNumber}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyPromocodes"
                component={screens.MyPromocodes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddANewAddress"
                component={screens.AddANewAddress}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
