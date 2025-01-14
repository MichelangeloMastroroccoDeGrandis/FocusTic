import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import { useItems } from '../context/ItemContext';
import ListItemRender from '../../components/utils/ListItemRender';
import ModalCreateItems from '../../components/Settings/Modal/ModalCreateItems';
import { HandleModal } from '../../components/Hooks/HandleModal';
import styles from '../../style/settings'

export default function Tab() {
    
  const { list, setList } = useItems();
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const {openModal, closeModal} = HandleModal({ setModalVisible, setInputValue });

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
            <View>
                <FlatList data={list} renderItem={({item}) => <ListItemRender item={item} type="item" />} keyExtractor={item => item.id.toString()} />
            </View>
            <TouchableOpacity style={styles.button} onPress={openModal} >
                <Text style={styles.buttonText}>Add List</Text>
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

