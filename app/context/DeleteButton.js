import { View, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import createStyles from '../../style/DeleteButton';
import { useThemeStyles } from './ThemeContext';

const DeleteButton = () => {
  const { setList } = useContext(ItemContext);
  const styles = useThemeStyles(createStyles);

  const deleteAll = async () => {
    try {
      await AsyncStorage.clear();
      setList([]);
      Alert.alert('Success', 'All items deleted');
    } catch (error) {
      console.error('Error clearing', error);
      Alert.alert('Error', 'Failed to clear items');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={deleteAll}>
        <Text style={styles.buttonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;
