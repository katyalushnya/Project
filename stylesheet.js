import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Stylesheet extends Component {
    render() {
        return (
            <View style={styles.column}>
                <Text style={styles.header}>Extended StyleSheet is working)))))!</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    header: {
        fontSize: '1.5rem',
        color: '$fontColor',
        textAlign: 'center',
    },
    column: {
        width: '80%',
        height: '60%',
        marginHorizontal: '10%',
        marginTop: '20%',
        backgroundColor: '$bgColor',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5,
    }
});
