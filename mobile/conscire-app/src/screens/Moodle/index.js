import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import HistoriaBebidas from '../../../assets/historiabebidas.png'
import Quiz from '../../../assets/quiz.png'
import Audit from '../../../assets/audit.png'
import LogoS from '../../../assets/logoc.png'
import ReacaoAlcool from '../../../assets/reacaoalcool.png'
import Influence from '../../../assets/influence.png'
import MetabolismoAlcool from '../../../assets/metabolismoalcool.png'

import styles from './styles';

function Moodle() {

    return (
        
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
           
            <Image source={LogoS} style={styles.logo}>                
            </Image>

            <Text style={styles.titulo}> Olá, seja bem vindo(a)! </Text>

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
    )
}

export default Moodle;