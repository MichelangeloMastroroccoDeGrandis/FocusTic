import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useItems } from '../context/ItemContext'; // Import useItems hook
import styles from '../../style/ButtonStyleClose';

const DeleteButton = () => {
  const { setList } = useItems(); // Get the setList function from the context
  

  const DeleteAll = async () => {
    try {
      await AsyncStorage.clear();
      setList([]); // Clear the list state
      Alert.alert('Success', 'Deleted all items');
      
    } catch (err) {
      console.error('Error clearing', err);
      Alert.alert('Error', 'Failed to clear items');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={DeleteAll}>
        <Text style={styles.buttonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;
