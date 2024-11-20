import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import { useItems } from '../context/ItemContext';
import ListItemRender from '../../components/ListItemRender';
import ModalCreateItems from '../../components/ModalCreateItems';
import styles from '../../style/settings';

export default function Tab() {
    const { list, setList } = useItems();
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const openModal = () => {
      setModalVisible(true)
    }

    const closeModal = () => {
      setModalVisible(false)
    }

    const handleInputChange = (text) => {
      setInputValue(text);
    }

    const AddItemAndCloseModal = () => {
      setList(list => [...list, {id: list.length + 1, text: inputValue, sections:[]}]);
      setInputValue('')
      setModalVisible(false)
    }

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <FlatList data={list} renderItem={({item}) => <ListItemRender item={item} type="item" />} keyExtractor={item => item.id.toString()} />
            </View>
            <TouchableOpacity onPress={openModal} style={styles.button}>
                <Text>Add Item +</Text>
            </TouchableOpacity>

            <ModalCreateItems 
              modalVisible={modalVisible}
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              AddItemAndCloseModal={AddItemAndCloseModal}
              closeModal={closeModal}
            />

        </SafeAreaView>
    </SafeAreaProvider>
  );
}

