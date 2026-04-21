import { useFonts } from "expo-font";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import { Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";
import { TenorSans_400Regular } from "@expo-google-fonts/tenor-sans";

import StackNavigator from "./src/navigation/StackNavigator";

const App: React.FC = () => {
    let [fontsLoaded, error] = useFonts({
        Lato_700Bold,
        Lato_400Regular,
        TenorSans_400Regular,
    });

    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <SafeAreaProvider>
                    <Provider store={store}>
                        <StackNavigator />
                    </Provider>
                </SafeAreaProvider>
                <FlashMessage
                    position="top"
                    statusBarHeight={20}
                    floating={true}
                />
            </NavigationContainer>
        );
    } else {
        return <Text>{error}</Text>;
    }
};

export default App;
