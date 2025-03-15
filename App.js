import React from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [animals, setAnimals] = React.useState([]);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  const addAnimal = () => {
    const newAnimal = { name, description };
    setAnimals([...animals, newAnimal]);
    setName('');
    setDescription('');
  };

  const submitFeedback = () => {
    alert('Feedback submitted: ' + feedback);
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adote Rio Ostras</Text>
      
      <Text style={styles.sectionTitle}>Cadastro de Animais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do animal"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do animal"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Cadastrar Animal" onPress={addAnimal} />
      
      <Text style={styles.sectionTitle}>Animais para Adoção</Text>
      <FlatList
        data={animals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.animalCard}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      
      <Text style={styles.sectionTitle}>Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Deixe seu feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Enviar Feedback" onPress={submitFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  animalCard: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  }
});

export default App;
