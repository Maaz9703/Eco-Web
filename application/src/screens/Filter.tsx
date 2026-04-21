import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import SafeAreaView from "react-native-safe-area-view";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const colors = [
    "#FCEDEA",
    "#FEE1DB",
    "#FFD9D1",
    "#FDC5B9",
    "#FDB7A8",
    "#FFA08A",
];

const tags = [
    "Nails",
    "Face",
    "Hair",
    "Make up",
    "Eye-brows",
    "Skin",
    "Lips",
    "Lashes",
    "Body",
    "Mask",
    "Oil",
    "Scrab",
];

const Filter: React.FC = ({ navigation }: any) => {
    const [isSale, setIsSale] = useState(true);
    const [isNew, setIsNew] = useState(false);
    const [selectColor, setSelectColor] = useState(colors[2]);
    const [productTag, setProductTag] = useState(5);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Category 2", value: "Category 2" },
        { label: "Category 3", value: "Category 3" },
        { label: "Category 4", value: "Category 4" },
    ]);

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
                title={"Filter"}
                goBack={true}
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
            />
        );
    };

    const renderDropDown = () => {
        return (
            <View style={{ marginTop: 20, marginBottom: 20, zIndex: 1 }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        backgroundColor: "#FAF9FF",
                        paddingHorizontal: 20,
                        marginHorizontal: 20,
                        width: theme.SIZES.width - 40,
                        borderRadius: 0,
                        borderWidth: 1,
                        borderColor: "#EEEEEE",
                    }}
                    textStyle={{
                        ...theme.FONTS.Lato_400Regular,
                        fontSize: 16,
                        color: "#666666",
                        textTransform: "capitalize",
                    }}
                    dropDownContainerStyle={{
                        borderColor: "#EEEEEE",
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        width: theme.SIZES.width - 40,
                        borderRadius: 0,
                        backgroundColor: "#FAF9FF",
                    }}
                />
            </View>
        );
    };

    const renderColors = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 40,
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.black,
                        marginRight: 14,
                    }}
                >
                    Color
                </Text>
                {colors.map((color, index, array) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                marginRight:
                                    array.length - 1 !== index ? 10 : 0,
                                borderWidth: selectColor === color ? 2 : 0,
                                borderColor:
                                    selectColor === color
                                        ? "#D05278"
                                        : "transparent",
                            }}
                            onPress={() => setSelectColor(color)}
                        >
                            <View
                                style={{
                                    width: selectColor === color ? 26 : 30,
                                    height: selectColor === color ? 26 : 30,
                                    backgroundColor: color,
                                }}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const renderStatus = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 40,
                }}
            >
                <TouchableOpacity onPress={() => setIsSale(!isSale)}>
                    <svg.SaleFilterSvg selected={isSale} />
                </TouchableOpacity>
                <View style={{ width: "16%" }} />
                <TouchableOpacity onPress={() => setIsNew(!isNew)}>
                    <svg.NewSvg selected={isNew} />
                </TouchableOpacity>
            </View>
        );
    };

    const renderTags = () => {
        return (
            <View
                style={{
                    marginBottom: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {tags.map((tag, index) => (
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            marginRight: 9,
                            borderWidth: 1,
                            borderColor:
                                productTag === index ? "#D05278" : "#EEEEEE",
                            backgroundColor: theme.COLORS.lightBlue,
                        }}
                        key={index}
                        onPress={() => setProductTag(index)}
                    >
                        <Text
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 4,
                                textTransform: "capitalize",
                                fontSize: 16,
                                color: "#666666",
                                ...theme.FONTS.Lato_400Regular,
                                lineHeight: 16 * 1.7,
                            }}
                        >
                            {tag}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderButton = () => {
        return (
            <components.Button
                title="apply filters"
                onPress={() => navigation.navigate("Shop")}
            />
        );
    };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    backgroundColor: "white",
                    paddingTop: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {renderColors()}
                {renderStatus()}
                {renderTags()}
                {renderButton()}
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
            {renderDropDown()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default Filter;
