import { View, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';  
import styles from '../../style/DeleteButton';

const DeleteButton = () => {
  const { setList } = useContext(ItemContext);  // ✅ Get setList from context

  const DeleteAll = async () => {
      try {
          await AsyncStorage.clear();
          setList([]);  // ✅ Clear list in context
          Alert.alert('Success', 'All items deleted');
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

