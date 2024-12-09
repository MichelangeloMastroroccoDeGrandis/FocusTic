import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useItems } from '../context/ItemContext';

const DeleteButton = () => {

    const { setList } = useItems();
    const router = useRouter();

    const DeleteAll = async () => {
        try {
            await AsyncStorage.clear();
            setList([]);
            Alert.alert('Success', 'Deleted all items', [
                {
                  text: 'OK',
                  onPress: () => {
                    setTimeout(() => {
                      router.replace('/'); 
                    }, 100); 
                  },
                },
              ]);
        } catch (err) {
            console.error('Error clearing', err);
            Alert.alert('Error', 'Failed to clear items');
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Clear All" onPress={DeleteAll} />
        </View>
    )
}

export default DeleteButton;