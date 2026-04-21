import { View, TextInput } from "react-native";
import React, { useState } from "react";

import { theme } from "../constants";

export type Props = {
    placeholder: string;
    secureTextEntry?: boolean;
    icon?: any;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    containerStyle?: any;
};

const InputField: React.FC<Props> = ({
    placeholder,
    icon,
    containerStyle,
    secureTextEntry,
    keyboardType,
}) => {
    const [focus, setFocus] = useState(false);

    return (
        <View
            style={{
                paddingLeft: 20,
                paddingRight: icon ? 0 : 30,
                height: 60,
                width: "100%",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme.COLORS.white,
                ...containerStyle,
            }}
        >
            <TextInput
                placeholder={placeholder}
                style={{
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontSize: 16,
                    lineHeight: 16 * 1,
                    ...theme.FONTS.Lato_400Regular,
                }}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={theme.COLORS.black}
                keyboardType={keyboardType}
                numberOfLines={1}
            />
            {icon}
        </View>
    );
};

export default InputField;
