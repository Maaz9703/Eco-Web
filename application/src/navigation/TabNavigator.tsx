import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import { theme } from "../constants";
import { svg } from "../svg";
import { screens } from "../screens";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    const cartItesm = useSelector((state: any) => state.cart.cartItems);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme.COLORS.white,
                    height: 64,
                    // borderTopColor: COLORS.lightBlue,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingHorizontal: 18,
                    // paddingBottom: 20,
                    // marginBottom: 10,
                },
            }}
            initialRouteName="HomeOne"
            sceneContainerStyle={{
                backgroundColor: theme.COLORS.white,
            }}
        >
            <Tab.Screen
                name="HomeOne"
                component={screens.HomeTwo}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <svg.HomeSvg
                            // color={focused ? theme.COLORS.black : themeCOLORS.gray}
                            transparent={focused ? false : true}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={screens.Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <svg.SearchSvg
                            // color={focused ? theme.COLORS.black : themeCOLORS.gray}
                            transparent={focused ? false : true}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={screens.Order}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <svg.BagSvg
                            // color={focused ? theme.COLORS.black : themeCOLORS.gray}
                            transparent={focused ? false : true}
                        />
                    ),
                }}
                // listeners={({ navigation }): any => ({
                //     tabPress: (e: any) => {
                //         cartItesm.length > 0 &&
                //             e.preventDefault(navigation.navigate("Order"));
                //     },
                // })}
            />
            <Tab.Screen
                name="Wishlist"
                component={screens.Wishlist}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <svg.WishListSvg
                            // color={focused ? theme.COLORS.black : themeCOLORS.gray}
                            transparent={focused ? false : true}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={screens.Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <svg.UserSvg
                            // color={focused ? theme.COLORS.black : themeCOLORS.gray}
                            transparent={focused ? false : true}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
