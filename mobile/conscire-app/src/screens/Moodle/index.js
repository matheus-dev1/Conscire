import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import HistoriaBebidas from '../../../assets/historiabebidas.png';
import Quiz from '../../../assets/quiz.png';
import Audit from '../../../assets/audit.png';
import Log from '../../../assets/log.png';
import ReacaoAlcool from '../../../assets/reacaoalcool.png';
import Influence from '../../../assets/influence.png';
import MetabolismoAlcool from '../../../assets/metabolismoalcool.png';

import styles from './styles';

function Moodle({navigation}) {

    return (
        <>
            <StatusBar backgroundColor="#F2F2F2" />
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => {navigation.navigate('Home')}} />
                <Image source={Log} style={styles.logo}>                
                </Image>
            </Appbar.Header>

            <View style={styles.container}>
                
                <Text style={styles.titulo}> Olá, seja bem vindo(a)! </Text>

                <ScrollView style={styles.scroll}>
            
                    <Image source={HistoriaBebidas} style={styles.imageH}>                
                    </Image>
                    <Text style={styles.textHist}>História das Bebidas</Text>

                    <Image source={Quiz} style={styles.imageQ}>                
                    </Image>
                    <Text style={styles.textQuiz}>Quiz</Text>

                    <Image source={Audit} style={styles.imageT}>                
                    </Image>
                    <Text style={styles.textAudit}>Teste Audit</Text>

                    <Image source={ReacaoAlcool} style={styles.imageR}>                
                    </Image>

                    <Text style={styles.textReacao}>Como o organismo reage ao álcool?</Text>

                    <Image source={Influence} style={styles.imageI}>                
                    </Image>
                    <Text style={styles.textMidia}>Mídias sociais e suas influências</Text>
                
                    <Image source={MetabolismoAlcool} style={styles.imageM}>                
                    </Image>
                    <Text style={styles.textMeta}>Metabolismo do Álcool</Text>
                    
                </ScrollView>
            </View>   
        </> 
    )
}

export default Moodle;