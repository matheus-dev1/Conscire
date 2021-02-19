import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png';
import styles from './styles';

function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}>                
            </Image>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.texto} >Sobre</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.texto}>Cadastre-se</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.texto}>Login</Text>
            </TouchableOpacity>       
     
        </View>
    )
}

export default Home;