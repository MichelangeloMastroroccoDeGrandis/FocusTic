import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';


const DeleteButton = () => {

    const router = useRouter();

    const DeleteAll = async () => {
        try {
            await AsyncStorage.clear();
            Alert.alert('Success', 'Delete all Items');
            router.push('/tabs/index')
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