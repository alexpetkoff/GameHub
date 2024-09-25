import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import FormButton from "./FormButton";

function LoginSignUpContainer({ screenState }) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Sign in</Text>
            </View>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputField} clearButtonMode placeholder="Username" autoCapitalize="none" />
                <TextInput clearButtonMode secureTextEntry={true} style={styles.inputField} autoCapitalize="none" placeholder="Password" />
            </View>
            <FormButton />
        </View>
    );
}

export default LoginSignUpContainer;

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderRadius: 10,
        padding: 15,
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
    },
    headingContainer: {
        borderRadius: 8,
        backgroundColor: "rgba(255 ,255 ,255, 0.9)",
    },
    heading: {
        fontSize: 24,
        letterSpacing: 1.2,
        fontWeight: "700",
        color: "black",
        padding: 10,
    },
    inputsContainer: {
        paddingTop: 20,
        width: "100%",
        gap: 10,
    },
    inputField: {
        backgroundColor: "#FFF",
        fontSize: 18,
        fontWeight: "700",
        paddingVertical: 10,
        paddingHorizontal: 8,
        color: "black",
        borderRadius: 5,
    },
});
