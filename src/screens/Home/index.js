import React, {useState} from 'react';
import{
  SafeAreaView, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity,
} from 'react-native';
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

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Text style = {styles.buttonText}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <Text style={[styles.text, {marginTop: 20}]}>
       Minhas Tarefas
      </Text>
      <ScrollView>
        {
          tasks.map(task => (
            <TouchableOpacity 
              style = {styles.buttonTask}
              key={task}>
              <Text style={styles.textTask}>
                {task}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </SafeAreaView>
   
  );
}

//SafeAreaView: componente que evita que no caso do ios o conteúdo da tela
// fique por cima da barra de status
// No android não tem efeito.