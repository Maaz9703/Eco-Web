import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const COLORS = {
    black: "#222222",
    white: "#fff",
    pastel: "#FCEDEA",
    gray: "#666666",
    accent: "#D05278",
    lightBlue: "#FAF9FF",
    transparent: "rgba(0, 0, 0, 0)",
    transparentBlack: "rgba(0, 0, 0, 0.7)",
    backgroundColorWhite: {
        backgroundColor: "#fff",
    },
    backgroundColorPastel: {
        backgroundColor: "#FCEDEA",
    },
};

const FONTS = {
    H1: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 32,
        lineHeight: 32 * 1.2,
    },
    H2: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 22,
        lineHeight: 22 * 1.2,
    },
    H3: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 20,
        lineHeight: 20 * 1.2,
    },
    H4: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 18,
        lineHeight: 18 * 1.2,
    },
    H5: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 16,
        lineHeight: 16 * 1.2,
    },
    H6: {
        fontFamily: "TenorSans_400Regular",
        fontSize: 14,
        lineHeight: 14 * 1.2,
    },
    Lato_400Regular: {
        fontFamily: "Lato_400Regular",
    },
    Lato_700Bold: {
        fontFamily: "Lato_700Bold",
    },
    TenorSans_400Regular: {
        fontFamily: "TenorSans_400Regular",
    },
    textStyle14: {
        fontFamily: "Lato_400Regular",
        fontSize: 14,
        lineHeight: 14 * 1.5,
    },
    textStyle16: {
        fontFamily: "Lato_400Regular",
        fontSize: 16,
        lineHeight: 16 * 1.7,
    },
};

const SIZES = {
    width,
    height,
    STATUS_BAR_HEIGHT,
};

const theme = {
    COLORS,
    FONTS,
    SIZES,
};

export { COLORS, FONTS, SIZES, theme };
