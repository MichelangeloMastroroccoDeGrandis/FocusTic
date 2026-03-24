import { View, Text, TouchableOpacity, Share, Alert, ScrollView } from 'react-native';
import { Modal } from 'react-native';
import createStyles from "../../style/listItemRender";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useThemeColors, useThemeStyles } from "../../app/context/ThemeContext";

const QRDisplay = ({ visible, onClose, qrData, title }) => {
    const colors = useThemeColors();
    const styles = useThemeStyles(createStyles);

    const handleShareQR = async () => {
        try {
            await Share.share({
                message: `Check out this item: ${title}\n\nQR Data:\n${qrData}`,
            });
        } catch (error) {
            Alert.alert('Error', 'Could not share QR data');
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>QR Code Data</Text>
                    <ScrollView style={styles.qrDataContainer}>
                        <Text style={styles.qrDataText}>{qrData}</Text>
                    </ScrollView>
                    <View style={styles.qrPlaceholder}>
                        <FontAwesome name="qrcode" size={100} color={colors.gold} />
                        <Text style={styles.qrPlaceholderText}>QR Code Display</Text>
                        <Text style={styles.qrPlaceholderSubtext}>Share this data to generate QR code</Text>
                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity 
                            style={styles.modalButton} 
                            onPress={handleShareQR}
                        >
                            <Text style={styles.modalButtonText}>Share Data</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.modalButton} 
                            onPress={onClose}
                        >
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default QRDisplay;
