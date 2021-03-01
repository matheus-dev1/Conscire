import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import Log from '../../../assets/log.png';
import Gif from '../../../assets/gif.gif';
import styles from './styles';

function Sobre({navigation}) {
    return (
        <>
        <StatusBar backgroundColor="#F2F2F2" />
        <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => {navigation.navigate('Home')}} />
        <Image source={Log} style={styles.logos}>                
        </Image>
        
        </Appbar.Header>
        
        <View style={styles.container}>
            
            <Image source={Gif} style={styles.ImagemSobre}> 
            </Image> 

            <Text style={styles.texto}> 
                Conscire é uma plataforma simples e amigável,
                nossa missão é instigar o pensamento crítico, 
                através de materiais e quizes sobre o 
                uso do álcool entre jovens, 
                como ferramenta de conscientização.
            </Text>
               
            <Text style={styles.texto2}> 
                Porque prevenção é o melhor caminho!
            </Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textobtn}>Conscientize-se</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Sobre;