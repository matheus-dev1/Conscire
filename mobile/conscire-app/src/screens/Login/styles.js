import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#744D8C',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 5,
        marginTop: 80
    },

    titulo: {
        color: 'white',
        fontSize: 28,
        marginTop: 60
    },

    inputEmail: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    inputSenha: {
        backgroundColor: 'white',
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
        color: 'white',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: -60
    },  
})

export default styles;