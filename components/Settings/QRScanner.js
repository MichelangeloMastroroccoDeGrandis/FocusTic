import { View, Text, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import { useItems } from '../../app/context/ItemContext';
import styles from '../../style/QRScanner';
import colors from '../../style/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const QRScanner = ({ visible, onClose }) => {
    const { list, setList } = useItems();
    const [qrData, setQrData] = useState('');

    const handleImportData = () => {
        try {
            const parsedData = JSON.parse(qrData);
            
            // Create new item from QR data
            const newItem = {
                id: list.length + 1,
                text: parsedData.title || 'Imported Item',
                sections: parsedData.steps ? parsedData.steps.map((step, index) => ({
                    id: `${list.length + 1}-${index + 1}`,
                    step: step.step || index + 1,
                    title: step.title || '',
                    type: step.type || 'text',
                    content: step.content || '',
                    timer: step.timer,
                    hours: step.hours,
                    minutes: step.minutes,
                    seconds: step.seconds
                })) : []
            };

            setList(prevList => [...prevList, newItem]);
            Alert.alert('Success', 'Item imported successfully!');
            setQrData('');
            onClose();
        } catch (error) {
            Alert.alert('Error', 'Invalid QR code format. Please check the data and try again.');
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Import QR Data</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <FontAwesome name="close" size={24} color={colors.light} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.contentContainer}>
                    <View style={styles.scanFrame}>
                        <FontAwesome name="qrcode" size={80} color={colors.gold} />
                    </View>
                    <Text style={styles.instruction}>
                        Paste QR code data below or scan with external app
                    </Text>
                    
                    <TextInput
                        style={styles.textInput}
                        multiline
                        numberOfLines={6}
                        value={qrData}
                        onChangeText={setQrData}
                        placeholder="Paste QR code data here..."
                        placeholderTextColor={colors.light}
                        textAlignVertical="top"
                    />
                    
                    <TouchableOpacity 
                        style={styles.importButton} 
                        onPress={handleImportData}
                        disabled={!qrData.trim()}
                    >
                        <Text style={styles.importButtonText}>Import Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default QRScanner;
