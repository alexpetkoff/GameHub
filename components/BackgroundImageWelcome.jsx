import { ImageBackground, StyleSheet } from "react-native";

function BackgroundImageWelcome({ children }) {
    return (
        <ImageBackground source={require("../assets/background.webp")} resizeMode="cover" style={styles.rootScreen} imageStyle={{ opacity: 0.9 }}>
            {children}
        </ImageBackground>
    );
}

export default BackgroundImageWelcome;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
});
