import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import { useItems } from '../context/ItemContext';
import ListItemRender from '../../components/utils/ListItemRender';
import ModalCreateItems from '../../components/Settings/Modal/ModalCreateItems';
import QRScannerCamera from '../../components/Settings/QRScannerCamera';
import { HandleModal } from '../../components/Hooks/HandleModal';
import styles from '../../style/settings';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../style/colors';

export default function Tab() {
    
  const { list, setList } = useItems();
  const [modalVisible, setModalVisible] = useState(false);
  const [qrScannerVisible, setQrScannerVisible] = useState(false);
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={openModal} >
                    <Text style={styles.buttonText}>Add List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.qrButton} onPress={() => setQrScannerVisible(true)} >
                    <FontAwesome name="qrcode" size={20} color={colors.light} />
                    <Text style={styles.buttonText}>Scan QR</Text>
                </TouchableOpacity>
            </View>

            <ModalCreateItems 
              modalVisible={modalVisible}
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              AddItemAndCloseModal={AddItemAndCloseModal}
              closeModal={closeModal}
            />

            <QRScannerCamera 
              visible={qrScannerVisible}
              onClose={() => setQrScannerVisible(false)}
            />

        </SafeAreaView>
    </SafeAreaProvider>
  );
}

