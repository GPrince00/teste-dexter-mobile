import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import api from '../services/api';
import aplication from '../services/aplication';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        const token = await aplication.login( username, password, api );
        if(token === "1"){
            alert("Usuário ou senha não podem estar vazios")
        } else {
            if (token === "2"){
                alert("Usuário ou senha invalidos!");
            } else {            
                localStorage.setItem('sessionToken', token);
                navigation.navigate('Main');
            }
        }        
    }

    function handleRegister() {

    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <StatusBar backgroundColor="black" barStyle="dark-content"/>
            <View style={styles.form}>
                <Image source={logo} style={styles.img}/>
                <Text style={styles.userInfoText}>Username</Text>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Your username"
                    style={styles.input}
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
                <Text style={styles.userInfoText}>Trouble accessing your account?</Text>
                <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
                    <LinearGradient
                        alignSelf= 'stretch'
                        colors={['#AE23A9', '#DC4E1B']}
                        start={[0, 0]}
                        end={[1.02, 1.01]}
                        style={{ padding: 15, alignItems: 'center'}}>                    
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.or}>or</Text>
                <TouchableOpacity onPress={handleRegister} style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}>Register</Text>
                </TouchableOpacity>
                    <Text style={styles.termsOfUse}>Terms of use - Privacy policy</Text>
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
        marginTop: 25,
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
        lineHeight: 30,
    },
    
    buttonLogin: {
        height: 46,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 35
    },

    buttonLoginText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },

    or: {
        textAlign: 'center',
        color: '#4A4A4A',
        fontSize: 16,
        fontWeight: 'normal',
    },

    buttonRegister: {
        height: 46,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 35,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#9B9B9B'
    },

    buttonRegisterText: {
        color: '#4A4A4A',
    },

    termsOfUse: {
        color: '#4A4A4A',
        fontSize: 14,
        textAlign: 'center'
    },
});