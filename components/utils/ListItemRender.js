import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { Link } from "expo-router";
import QRCodeDisplay from './QRCodeDisplay';
import { useState } from 'react';
import styles from "../../style/listItemRender";
import colors from "../../style/colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ListItemRender = ({ item, type, list }) => {
    const pathname = type === 'section' ?'/sections/[item]' : '/items/[id]';
    const [qrModalVisible, setQrModalVisible] = useState(false);

    const generateQRData = () => {
        if (type === 'section' && list) {
            const sectionData = list.find(section => section.id === item.id);
            if (sectionData && sectionData.sections) {
                return JSON.stringify({
                    title: sectionData.text,
                    steps: sectionData.sections.map(step => ({
                        step: step.step,
                        title: step.title || '',
                        type: step.type,
                        content: step.content,
                        timer: step.timer,
                        hours: step.hours,
                        minutes: step.minutes,
                        seconds: step.seconds
                    }))
                });
            }
        }
        return JSON.stringify({ title: item.text, steps: [] });
    };

    return( 
        <View style={styles.container}>
            <Link style={styles.link} key={item.id} href={{
              pathname,
              params: { id: item.id, 
                        title: item.text
              }
            }}>
                <Text style={styles.text}  numberOfLines={2}>{item.text}</Text>
            </Link>
            {type === 'section' && (
                <TouchableOpacity 
                    style={styles.qrButton} 
                    onPress={() => setQrModalVisible(true)}
                >
                    <FontAwesome name="qrcode" size={20} color={colors.gold} />
                </TouchableOpacity>
            )}
            
            <QRCodeDisplay 
                visible={qrModalVisible}
                onClose={() => setQrModalVisible(false)}
                qrData={generateQRData()}
                title={item.text}
            />
        </View>
    )
}

export default ListItemRender;