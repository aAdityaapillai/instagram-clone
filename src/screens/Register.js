import React, { useState } from "react"
import { Alert, Text, View, TextInput, StyleSheet, SafeAreaView } from "react-native"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "../compoments/Button";


export const Register = ({ navigation }) => {

    const auth = getAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
    });

    const submitForm = () => {
        //Alert.alert(JSON.stringify(user));

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                Alert.alert("Account created");
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error " + errorCode + " > " + errorMessage);
                // ..
            });
    }

    const navigateToLogin = () => {
        navigation.navigate("Login")
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

                <Button onPress={submitForm} title={"Register"} />

                <Button onPress={navigateToLogin} title={"Existing User?"} />

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
    }
});

