import { Pressable, StyleSheet, Text } from "react-native";

function FormButton() {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.text}>Submit</Text>
        </Pressable>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgb(77, 176, 104)",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgb(88, 214, 122)",
        borderWidth: 4,
    },
    buttonPressed: {
        opacity: 0.9,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 4,
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        letterSpacing: 1.4,
        fontWeight: "700",
    },
});
