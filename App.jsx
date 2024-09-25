import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";

import BackgroundImageWelcome from "./components/BackgroundImageWelcome";
import LoginSignUpContainer from "./components/LoginSignUpContainer";

export default function App() {
    // const [loaded, error] = useFonts({
    //     "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    // });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar hidden style="light" />
                <BackgroundImageWelcome>
                    <View style={styles.centerContent}>
                        <LoginSignUpContainer />
                    </View>
                </BackgroundImageWelcome>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContent: {
        alignItems: "center",
        margin: "auto",
    },
});
