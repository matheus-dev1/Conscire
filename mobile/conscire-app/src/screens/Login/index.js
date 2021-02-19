import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import Logo from '../../../assets/logo.png'

import styles from './styles';

const apiUsuario = {
        id: 1, 
        email: "ines@conscire.com",
        senha: "123"
}

function Login({navigation}) {

    function autenticacao() {
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Tarefas")
        } else {
            Alert.alert("Usuário Inválido", "Informe um e-mail e senha válidos!")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}>                
            </Image>
            
            <View>
            <Text style={styles.titulo}>Login</Text>
            </View>
            
            <TextInput 
                placeholder="E-mail" 
                style={styles.inputEmail} 
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
            />

            <TextInput placeholder="Senha" 
                style={styles.inputSenha} 
                secureTextEntry={true} 
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
            
            <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                <Text style={styles.texto} onPress={() => navigation.navigate('Moodle')}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.textoCad} onPress={() => navigation.navigate('Cadastro')}>Ainda não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;