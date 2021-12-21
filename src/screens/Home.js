import React from "react"
import { Button, Text, View } from "react-native"

export const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello Instagram</Text>

            <Button
                title="Go to Search"
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}