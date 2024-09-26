import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import FormButton from "./FormButton";
import CustomButton from "./CustomButton";

function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputField} clearButtonMode placeholder="Username" autoCapitalize="none" />
                <TextInput clearButtonMode secureTextEntry={true} style={styles.inputField} autoCapitalize="none" placeholder="Password" />
            </View>
            <FormButton />
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Text style={{ fontSize: 14 }}>Don't have an account?</Text>
                <CustomButton title="Register" />
            </View>
        </View>
    );
}

function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputField} clearButtonMode placeholder="Username" autoCapitalize="none" />
                <TextInput clearButtonMode secureTextEntry={true} style={styles.inputField} autoCapitalize="none" placeholder="Password" />
                <TextInput clearButtonMode secureTextEntry={true} style={styles.inputField} autoCapitalize="none" placeholder="Re-Password" />
            </View>
            <FormButton />
        </View>
    );
}

function LoginSignUpContainer({ screenState }) {
    const component = screenState === "login" ? <Login /> : <Register />;

    return component;
}

export default LoginSignUpContainer;

const styles = StyleSheet.create({
    container: {
        width: 300,
        borderRadius: 10,
        padding: 25,
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255, 0.8)",
    },
    heading: {
        fontSize: 24,
        letterSpacing: 1.2,
        color: "black",
        padding: 10,
        fontFamily: "Roboto-Regular",
    },
    inputsContainer: {
        paddingTop: 10,
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
        borderWidth: 2,
        borderColor: "#999",
        fontFamily: "Roboto-Regular",
    },
});
