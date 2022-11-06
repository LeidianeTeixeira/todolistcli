import React from 'react';
import{
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Olá, Leidiane!
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite sua tarefa..."
        placeholderTextColor='#555'
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style = {styles.buttonText}>
          Adicionar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
   
  );
}

//SafeAreaView: componente que evita que no caso do ios o conteúdo da tela
// fique por cima da barra de status
// No android não tem efeito.