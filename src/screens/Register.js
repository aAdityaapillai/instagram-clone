import React, { useState } from "react"
import { Alert, Button, Text, View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"

export const Register = ({ navigation }) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
    });

    const submitForm = () => {
        Alert.alert(JSON.stringify(user));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 6 }}>
                <Text style={styles.header}>Register</Text>
           
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    onChangeText={(name) => setUser({ ...user, "name": name })}
                />
                <TextInput
                    autoCapitalize="none"
                    style={styles.input}
                    placeholder="email"
                    keyboardType="email-address"
                    onChangeText={(email) => setUser({ ...user, "email": email })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setUser({ ...user, "password": password })}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={submitForm}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginVertical: 4,
        paddingVertical: 10,
        borderRadius: 4,
        width: "100%"
    },
    header: {
        color: '#222',
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 10
    },

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

