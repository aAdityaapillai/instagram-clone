import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#222',
        marginVertical: 10,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20
    },

    buttonText: {
        color: '#fff',
        fontWeight: "800",
    },
});