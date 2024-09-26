import { Pressable, Text } from "react-native";

function CustomButton({ title }) {
    return (
        <Pressable>
            <Text style={{ fontSize: 16, color: "#2679ff", fontWeight: "600" }}>{title}</Text>
        </Pressable>
    );
}

export default CustomButton;
