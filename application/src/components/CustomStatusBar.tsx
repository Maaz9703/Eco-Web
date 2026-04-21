import { View, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
    barStyle?: "light-content" | "dark-content";
    backgroundColor?: string;
};

const CustomStatusBar: React.FC<Props> = ({
    backgroundColor = "green",
    barStyle = "dark-content",
}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
};

export default CustomStatusBar;
