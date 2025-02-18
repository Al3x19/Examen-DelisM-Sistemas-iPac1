import React from 'react';
import { SafeAreaView, FlatList, TextInput, Button, View, Text, TouchableOpacity } from 'react-native';
// import { useProducts } from '../hooks/useProducts';  // Importamos el hook
import styles from '@/styles/global-Styles';
import useTemperature from '@/hooks/useTemperature';

const App = () => {
  // Usamos el hook 'useProducts' para manejar la lógica de productos
  const {

    temperature,

    getColor,
    increaseTemp,
    decreaseTemp,
  }= useTemperature();
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Temperature APP</Text>


      <Text style={styles.temperature}>{temperature}</Text>
    
      <Button
        title="+"
        onPress={increaseTemp}
        //  Llama a la función de subir Temperatura del hook
        color={styles.buttonContainer.backgroundColor}
      />
      <Button
        title="-"
        onPress={decreaseTemp} 
        // Llama a la función de subir Temperatura del hook
        color={styles.buttonContainer.backgroundColor}
      />
    </SafeAreaView>
  );
};

export default App;

