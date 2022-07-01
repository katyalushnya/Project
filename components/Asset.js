import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Asset extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Local files and assets can be imported by dragging and dropping them into the editor
                </Text>
                <Image style={styles.logo} source={require("../assets/splash.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#69674e',
    },
    logo: {
        backgroundColor: "#73b786",
        height: 128,
        width: 128,
    }
});
