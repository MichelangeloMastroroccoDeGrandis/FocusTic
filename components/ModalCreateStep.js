import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import ModalWrap from "./ModalWrap";
import CloseButton from './CloseButton';
import { Audio } from 'expo-av';

const ModalCreateStep = ({ 
    type,
    modalVisible, 
    inputValue, 
    handleInputChange, 
    AddItemAndCloseModal, 
    closeModal,
    setVideoThumbnail,
    setVideoUri 
     }) => {

    const [mediaPermission, setMediaPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [recording, setRecording] = useState(null);
    const [sound, setSound] = useState(null);
    const [recordingUri, setRecordingUri] = useState(null);
    const [isRecording, setIsRecording] = useState(false);

    // Request the required media permissions on mount
    useEffect(() => {
        const getPermissions = async () => {
            const mediaPermission = await MediaLibrary.requestPermissionsAsync();
            const photoPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setMediaPermission(mediaPermission.granted && photoPermission.granted);
        };
        getPermissions();
    }, []);

    const startRecording = async () => {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.granted) {
                const { recording } = await Audio.Recording.createAsync(
                    Audio.RecordingOptionsPresets.HIGH_QUALITY
                );
                setRecording(recording);
                setIsRecording(true);
            } else {
                alert('Permission to access microphone is required!');
            }
        } catch (error) {
            console.error('Failed to start recording:', error);
        }
    };

    const stopRecording = async () => {
        if (recording) {
            try {
                await recording.stopAndUnloadAsync();
                const uri = recording.getURI();
                setRecordingUri(uri);
                setIsRecording(false);
            } catch (error) {
                console.error('Failed to stop recording:', error);
            }
        }
    };

    const playRecording = async () => {
        if (recordingUri) {
            const { sound } = await Audio.Sound.createAsync(
                { uri: recordingUri },
                { shouldPlay: true }
            );
            setSound(sound);
        }
    };

    const pickImage = async () => {
        // Request permission to access the media library
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        // Launch the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // Check if an image was selected
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const pickVideo = async () => {
        // Check for media library permissions before picking a video
        if (!mediaPermission) {
            alert('Permission to access the media library is required');
            return;
        }

        // Launch the video picker to choose a video from the library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const videoUri = result.assets[0].uri;
            setVideo(videoUri);

            // Extract thumbnail from the video using MediaLibrary
            try {
                const asset = await MediaLibrary.createAssetAsync(videoUri);
                const info = await MediaLibrary.getAssetInfoAsync(asset);

                if (info && info.uri && info.uri.includes('.jpg')) {
                    setThumbnail(info.uri);  // This should now be an image URI (e.g., .jpg)
                } else {
                    console.error('Failed to extract a valid thumbnail image');
                }

                setVideoUri(videoUri);   
                setVideoThumbnail(info.uri);
            } catch (error) {
                console.error('Error getting thumbnail:', error);
            }
        }
    };

    if (type === 'Text') {
        return (
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text>Add Text</Text>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter text here"
                />
                <Button title="Add" onPress={() => AddItemAndCloseModal('Text', inputValue)} />
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        );
    } else if (type === 'Image') {
        return (
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text>Add Image</Text>
                <View style={styles.container}>
                    {image ? (
                        <>
                            <Image source={{ uri: image }} style={styles.image} />
                            <Button title="Add" onPress={() => { if (image) { AddItemAndCloseModal('Image', image); } }} />
                        </>
                    ) : (
                        <Button title="Select Photo" onPress={pickImage} />
                    )}
                </View>
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        );
    } else if (type === 'Video') {
        return (
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text>Add Video</Text>
                <View style={styles.container}>
                    {video ? (
                        <>
                            {thumbnail && (
                                <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
                            )}
                            <Button title="Add" onPress={() => AddItemAndCloseModal('Video', video)} />
                        </>
                    ) : (
                        <Button title="Select Video" onPress={pickVideo} />
                    )}
                </View>
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        );
    } else if (type === 'Audio') {
        return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
            <Text>Add Audio</Text>
            <View style={styles.container}>
                {isRecording ? (
                        <Button title="Stop Recording" onPress={stopRecording} />
                    ) : (
                        <Button title="Start Recording" onPress={startRecording} />
                    )}
                {recordingUri && !isRecording && (
                        <>
                            <Button title="Play Recording" onPress={playRecording} />
                            <Button
                              title="Add Audio"
                              onPress={() => {
                                if (recordingUri) {
                                  AddItemAndCloseModal('Audio', recordingUri);
                                }
                              }}
                            />
                        </>
                    )}
            </View>
            <CloseButton closeModal={closeModal} />
        </ModalWrap>
        )
    }
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#f1f1f1',
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
        borderRadius: 10,
    },
    video: {
        width: 200,
        height: 200,
        marginTop: 10,
        borderRadius: 10,
    },
    thumbnail: {
        width: 200,
        height: 200,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
    },
});

export default ModalCreateStep;
