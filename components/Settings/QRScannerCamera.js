import { View, Text, TouchableOpacity, Alert, Modal } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import { useItems } from '../../app/context/ItemContext';
import createStyles from '../../style/QRScanner';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useThemeColors, useThemeStyles } from '../../app/context/ThemeContext';

const QRScannerCamera = ({ visible, onClose }) => {
    const { list, setList } = useItems();
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const colors = useThemeColors();
    const styles = useThemeStyles(createStyles);

    useEffect(() => {
        if (visible && !permission) {
            requestPermission();
        }
    }, [visible, permission, requestPermission]);

    const handleBarCodeScanned = ({ data }) => {
        if (scanned) return;
        
        setScanned(true);
        
        try {
            const parsedData = JSON.parse(data);
            
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
            setScanned(false);
            onClose();
        } catch (error) {
            Alert.alert('Error', 'Invalid QR code format. Please scan a valid TikDo QR code.');
            setScanned(false);
        }
    };

    if (!permission) {
        return (
            <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Scan QR Code</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <FontAwesome name="close" size={24} color={colors.light} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.permissionContainer}>
                        <Text style={styles.permissionText}>Requesting camera permission...</Text>
                    </View>
                </View>
            </Modal>
        );
    }

    if (!permission.granted) {
        return (
            <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Scan QR Code</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <FontAwesome name="close" size={24} color={colors.light} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.permissionContainer}>
                        <Text style={styles.permissionText}>No access to camera</Text>
                        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
                            <Text style={styles.permissionButtonText}>Grant Permission</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Scan QR Code</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <FontAwesome name="close" size={24} color={colors.light} />
                    </TouchableOpacity>
                </View>
                
                <CameraView
                    style={styles.camera}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                >
                    <View style={styles.overlay}>
                        <View style={styles.scanFrame} />
                        <Text style={styles.instruction}>
                            Align QR code within the frame
                        </Text>
                        {scanned && (
                            <View style={styles.scannedOverlay}>
                                <FontAwesome name="check-circle" size={50} color={colors.gold} />
                                <Text style={styles.scannedText}>QR Code Scanned!</Text>
                            </View>
                        )}
                    </View>
                </CameraView>
            </View>
        </Modal>
    );
};

export default QRScannerCamera;
