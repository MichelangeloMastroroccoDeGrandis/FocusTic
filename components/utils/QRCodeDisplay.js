import { View, Text, TouchableOpacity, Share, Alert, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useState } from 'react';
import * as FileSystem from 'expo-file-system/legacy';
import * as MediaLibrary from 'expo-media-library';
import styles from "../../style/listItemRender";
import colors from "../../style/colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const QRCodeDisplay = ({ visible, onClose, qrData, title }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadQR = async () => {
        try {
            setIsDownloading(true);
            
            // Generate SVG string and save as file
            const svgString = `
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="${colors.light}"/>
                    <text x="100" y="100" text-anchor="middle" font-size="10" fill="${colors.dark}">QR Code</text>
                </svg>
            `;
            
            const fileName = `qr-code-${Date.now()}.svg`;
            const fileUri = FileSystem.documentDirectory + fileName;
            
            await FileSystem.writeAsStringAsync(fileUri, svgString, {
                encoding: 'utf8',
            });
            
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            await MediaLibrary.createAlbumAsync('FocusTic QR Codes', asset, false);
            
            Alert.alert('Success', 'QR code saved to gallery!');
            setIsDownloading(false);
        } catch (error) {
            console.error('Download error:', error);
            Alert.alert('Error', 'Failed to download QR code');
            setIsDownloading(false);
        }
    };

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
                    <Text style={styles.modalTitle}>QR Code</Text>
                    
                    <View style={styles.qrCodeContainer}>
                        <QRCode
                            value={qrData}
                            size={200}
                            color={colors.dark}
                            backgroundColor={colors.light}
                        />
                    </View>
                    
                    <View style={styles.modalButtons}>
                        <TouchableOpacity 
                            style={[styles.modalButton, styles.downloadButton]} 
                            onPress={handleDownloadQR}
                            disabled={isDownloading}
                        >
                            <FontAwesome name="download" size={16} color={colors.dark} />
                            <Text style={styles.modalButtonText}>
                                {isDownloading ? 'Downloading...' : 'Download'}
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[styles.modalButton, styles.shareButton]} 
                            onPress={handleShareQR}
                        >
                            <FontAwesome name="share" size={16} color={colors.dark} />
                            <Text style={styles.modalButtonText}>Share</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[styles.modalButton, styles.closeButton]} 
                            onPress={onClose}
                        >
                            <FontAwesome name="close" size={16} color={colors.dark} />
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default QRCodeDisplay;
