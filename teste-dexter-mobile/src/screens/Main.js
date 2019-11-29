import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function Main() {
    return (
        <View style={styles.text}>
            <StatusBar backgroundColor="black" barStyle="dark-content"/>
            <Text>Still Working</Text>
        </View>        
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    
});