import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './styles';
import Logob from '../../../assets/logos.png';

function Cadastro({navigation}) {
    return (
        <>
        <StatusBar/>
        <Appbar.Header style={styles.appbar}>
            <Appbar.BackAction onPress={() => {navigation.navigate('Home')}} />     
        </Appbar.Header>
        
        <View style={styles.container}>
            <Image source={Logob} style={styles.logob}>                
            </Image>
            
            <View>
            <Text style={styles.titulo}>Cadastre-se</Text>
            </View>

            <TextInput 
                placeholder="Nome Completo" 
                style={styles.inputEmail} 
            />
            
            <TextInput 
                placeholder="E-mail" 
                style={styles.inputEmail} 
            />

            <TextInput placeholder="Digite uma senha" 
                style={styles.inputSenha} 
                secureTextEntry={true} 
            />
            <TextInput placeholder="Confirme a senha" 
                style={styles.inputSenha} 
                secureTextEntry={true} 
            />
            
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.texto}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnL} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoCad}>Já têm cadastro? Faça Login</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Cadastro;