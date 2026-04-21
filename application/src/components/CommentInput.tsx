import { View, TextInput } from "react-native";
import React from "react";

import { theme } from "../constants";

type Props = {
    containerStyle?: any;
};

const CommentInput: React.FC<Props> = ({ containerStyle }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 130,
                borderWidth: 1,
                borderColor: theme.COLORS.pastel,
                ...containerStyle,
                marginBottom: 41,
            }}
        >
            <TextInput
                style={{
                    width: "100%",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 23,
                    paddingBottom: 23,
                }}
                placeholder="Enter your comment"
                textAlignVertical="top"
                multiline={true}
            />
        </View>
    );
};

export default CommentInput;
