import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/adaptive-icon.png")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <Text>Fast Food truck</Text>
            </View>
            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        alignItems: 'center'

    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    }

})

export default WelcomeScreen;