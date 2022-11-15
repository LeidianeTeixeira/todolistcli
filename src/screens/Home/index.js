import React, {useState} from 'react';
import{
  FlatList,
  SafeAreaView, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity,
} from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function Home(){
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  function handleAddNewTask(){
    setTasks(oldState => [...oldState, newTask]);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>
        Olá, Leidiane!
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Digite sua tarefa..."
        placeholderTextColor='#555'
        onChangeText={setNewTask}
      />

      <Button
        onPress={handleAddNewTask}
        activeOpacity={0.7}
        title="Adicionar Tarefa"
      />
      
      <Text style={[styles.text, {marginTop: 20}]}>
       Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity style = {styles.buttonTask}>
            <Text style={styles.textTask}>
              {item}
            </Text>
          </TouchableOpacity>  
        )}
      />
      
    </SafeAreaView>
   
  );
}

//SafeAreaView: componente que evita que no caso do ios o conteúdo da tela
// fique por cima da barra de status
// No android não tem efeito.