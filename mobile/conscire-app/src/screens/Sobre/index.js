import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Logos from '../../../assets/logos.png';
import ImagemSobre from '../../../assets/consciencia.png';

import styles from './styles';

function Sobre({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={Logos} style={styles.logos}>                
            </Image>
            <Image source={ImagemSobre} style={styles.ImagemSobre}> 
            </Image> 

            <Text style={styles.texto}> 
            Conscire é uma plataforma simples e amigável,
            nossa missão é instigar o pensamento crítico, 
            através de materiais e quizes sobre o 
            uso do álcool entre jovens, 
            como ferramenta de conscientização.            
            </Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textobtn}>Conscientize-se</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Sobre;