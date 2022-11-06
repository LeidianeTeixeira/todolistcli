import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121015'
        //alignItems:'center',
        //justifyContent: 'center'
    },
    text:{
        fontSize:25,
        color: 'white',
        margin: 20
    },
    input:{
        backgroundColor: '#1F1E25',
        color: 'white',
        fontSize: 18,
        padding: Platform.os === 'ios' ? 15 : 10,
        marginHorizontal: 20
    },
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
    }


    //Com Platform, é possivel testar qual SO para fazer configurações
    // EX:  padding: Platform.os === 'ios' ? 15 : 10,


});