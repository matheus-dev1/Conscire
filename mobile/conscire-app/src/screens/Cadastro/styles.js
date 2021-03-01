import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logob: {
        width: 275,
        height: 65,
        marginBottom: 5,
        marginTop: -20,
        marginLeft: -10
    },
    
    titulo: {
        color: '#744D8C',
        fontSize: 28,
        marginTop: 80
    },

    inputEmail: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    inputSenha: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    btn: {
        backgroundColor: '#F09F09',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
        
    },
    texto: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    textoCad: {
        fontSize: 20,
        color: '#744D8C',
        textAlign: 'center',
        marginTop: 120,
        marginBottom: -60
    },
    btnL: {
        marginBottom: 80,
        marginTop: -30
    },
    appbar: {
        backgroundColor: '#744D8C',
    },
})

export default styles;