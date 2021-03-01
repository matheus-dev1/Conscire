import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',  
    },

    logos: {
        marginTop: 50,
        marginLeft: 50,
        width: 290,
        height: 70,
    },

    imagemContato: {
        width: 280,
        height: 280, 
        marginLeft: 65,
        marginTop: 80,
    },
    
    titulo: {
        color: '#F09F09',
        fontSize: 23,
        marginTop: 60,
        marginLeft: 55,
        marginRight: 40,
        marginBottom: -30
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
        color: '#744D8C',
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: -10
    },

    textoCad: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: -60
    },  
    
    textobtn: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#F09F09',
        width: '90%',
        height: '6%',
        marginTop: 50,
        marginLeft: 19,
        marginBottom: -20,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
    },
    appbar: {
        backgroundColor: '#744D8C',
    },
})

export default styles;