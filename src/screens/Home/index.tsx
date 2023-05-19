import { FlatList, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style'
import { Task } from '../../components/Tarefa'
import React, { useState } from 'react';

export default function Home() {

  const [task, setTask] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')
  const [done, setDone] = useState(0)

  function doneUpdate(add: boolean) {
    add ? setDone(done + 1) : setDone(done - 1)
  }

  function addTask() {
    if (taskName.replaceAll(" ", "") != "" && !task.includes(taskName)) {
      setTask((prevState) => [...prevState, taskName])
      Alert.alert("Sucesso", "Tarefa adicionada")
      setTaskName("")
    }
    else Alert.alert("Erro", "Verifique se a tarefa já existe ou está em branco.")
  }

  function rmTask(nome: string) {
    return Alert.alert("Aviso", "Deseja remover a tarefa?",
      [{
        text: "Sim",
        onPress: () => {
          setTask((prevState) => prevState.filter(tarefa => tarefa !== nome))
        }
      },
      {
        text: "Não",
        style: "cancel"
      }])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título da tarefa"
          placeholderTextColor="#6B6B6B"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.counter}>
        <Text style={styles.textCriadas}>Criadas</Text>
        <TextInput style={styles.counterDisplay} editable={false}>{task.length}</TextInput>
        <Text style={styles.textDone}>Concluídas</Text>
        <TextInput style={styles.counterDisplay} editable={false}>{done}</TextInput>
      </View>

      <View style={styles.split}></View>

      <FlatList
        data={task}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => rmTask(item)}
            done={done}
            onDone={(add) => doneUpdate(add)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Ionicons name="md-clipboard-outline" size={80} color="#3e3e3e" style={{ margin: 15 }} />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{
              color: '#888888',
              fontSize: 14,
              textAlign: 'center'
            }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )
        }
      />
    </View >
  );
}