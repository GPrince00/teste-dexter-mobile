import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {


        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <View style={styles.form}>
                <Image source={logo} style={styles.img}/>
                <Text style={styles.userInfoText}>Username</Text>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    placeholder="seunome@email.com"
                    placeholderTextColor="#9B9B9B"   
                    value={username}
                    onChangeText={setUsername}                 
                />                    
                <Text style={styles.userInfoText}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}                  
                    placeholder="Password"
                    placeholderTextColor="#9B9B9B"  
                    value={password}
                    onChangeText={setPassword}                  
                />
                <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
                    <LinearGradient
                        colors={['#AE23A9', '#DC4E1B']}
                        start={[0, 0]}
                        end={[1.02, 1.01]}
                        style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>                    
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    form: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 30, 
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 7, 
    },

    img: {
        width: 230,
        height: 29.02
    },

    userInfoText: {
        color: '#4A4A4A',    
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 30,
    },
    
    input: {    
        height: 46,
        alignSelf: 'stretch',
        color: '#000000',
        borderWidth: 1,
        borderColor: '#4A4A4A',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'normal',          
        lineHeight: 30
    },
    
    buttonLogin: {
        height: 46,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonLoginText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
});