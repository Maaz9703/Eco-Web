import { View, ImageBackground } from "react-native";
import React from "react";

type Props = {
    icon: any;
    containerStyle?: any;
};

const BgElementBig: React.FC<Props> = ({ icon, containerStyle }) => {
    return (
        <ImageBackground
            source={{
                uri: "https://via.placeholder.com/347x319/F9F8FE/?text=PRODUCT+IMAGE",
            }}
            style={{
                width: 347,
                height: 319,
                alignSelf: "center",
                ...containerStyle,
            }}
            resizeMode="contain"
        >
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "center",
                }}
            >
                {icon}
            </View>
        </ImageBackground>
    );
};

export default BgElementBig;
