import {
    View,
    Text,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import Accordion from "react-native-collapsible/Accordion";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const frequentlyQuestions = [
    {
        id: "1",
        question: "How long does it take for home delivery?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "2",
        question: "How are new products developed?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "3",
        question: "Should I read labels?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "4",
        question: "How do anti-wrinkle treatments work?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "5",
        question: "Why are animal fats in cosmetics?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "6",
        question: "What are Smart Proteins?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];

const FAQ: React.FC = () => {
    const [activeSections, setActiveSections] = useState([]);

    const setSections = (sections: any) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

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
                title="FAQ"
                goBack={true}
                containerStyle={{ backgroundColor: theme.COLORS.pastel }}
                textStyle={{ textTransform: "uppercase" }}
            />
        );
    };

    const renderFaqHeader = (section: any, _: any, isActive: any) => {
        return (
            <View
                style={{
                    paddingVertical: 18,
                    marginLeft: 20,
                    marginRight: 18,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.H5,
                        textTransform: "capitalize",
                        color: theme.COLORS.black,
                    }}
                >
                    {section.question}
                </Text>
                {isActive ? <svg.QuestionOpenSvg /> : <svg.QuestionCloseSvg />}
            </View>
        );
    };

    const renderContent = (section: any, _: any, isActive: any) => {
        return (
            <View
                style={{
                    marginHorizontal: 20,
                    paddingBottom: 20,
                }}
            >
                <Text
                    style={{
                        ...theme.FONTS.textStyle16,
                        lineHeight: 15 * 1.5,
                        color: theme.COLORS.gray,
                    }}
                >
                    {section.answer}
                </Text>
            </View>
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
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }}>
                <Accordion
                    activeSections={activeSections}
                    sections={frequentlyQuestions}
                    touchableComponent={TouchableOpacity}
                    renderHeader={renderFaqHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                    underlayColor={theme.COLORS.black}
                    sectionContainerStyle={{
                        backgroundColor: theme.COLORS.white,
                        marginBottom: 8,
                        borderWidth: 1,
                        borderColor: "#e6e6e6",
                        marginHorizontal: 20,
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default FAQ;
