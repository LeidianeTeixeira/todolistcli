import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    button:{
        backgroundColor:'green', //cor de fundo do botão
        padding:15, //espaçamento dentro do botão
        margin:20, //margem
        alignItems:'center',//alinhamento do texto do botão no centro
        borderRadius:7 //arredondamento das bordas do botão
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
});
