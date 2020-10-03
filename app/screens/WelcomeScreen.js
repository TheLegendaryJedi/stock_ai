import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen (props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.overlay}></View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.logoText}>Invest Wisely...</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.registerText}>Register Now</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#02a9f7',
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#d4f0fc',
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 150,
        height: 150,
        opacity: 1
    },
    logoContainer: {
        position: "absolute",
        top: 350,
        alignItems: "center"
    },
    logoText: {
        color: 'white',
        fontSize: 20
    },
    loginText: {
        color: 'white',
        fontSize: 30
    },
    registerText: {
        color: 'black',
        fontSize: 30
    }
})
export default WelcomeScreen;