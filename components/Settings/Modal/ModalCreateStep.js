import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Audio } from 'expo-av';
import ModalCreateText from "./ModalCreateText";
import ModalCreateImage from "./ModalCreateImage";
import ModalCreateVideo from "./ModalCreateVideo";
import ModalCreateAudio from "./ModalCreateAudio";

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
            <ModalCreateText 
                modalVisible={modalVisible} 
                inputValue={inputValue} 
                handleInputChange={handleInputChange} 
                AddItemAndCloseModal={AddItemAndCloseModal} 
                closeModal={closeModal}
            />
        );
    } else if (type === 'Image') {
        return (
            <ModalCreateImage 
                modalVisible={modalVisible} 
                image={image} 
                pickImage={pickImage} 
                AddItemAndCloseModal={AddItemAndCloseModal} 
                closeModal={closeModal} 
            />
        );
    } else if (type === 'Video') {
        return (
            <ModalCreateVideo 
                modalVisible={modalVisible} 
                video={video} 
                thumbnail={thumbnail} 
                pickVideo={pickVideo} 
                AddItemAndCloseModal={AddItemAndCloseModal} 
                closeModal={closeModal}
            />
        );
    } else if (type === 'Audio') {
        return (
            <ModalCreateAudio 
                modalVisible={modalVisible} 
                isRecording={isRecording} 
                startRecording={startRecording} 
                stopRecording={stopRecording} 
                playRecording={playRecording} 
                recordingUri={recordingUri} 
                AddItemAndCloseModal={AddItemAndCloseModal} 
                closeModal={closeModal}
            /> 
        )
    }
};


export default ModalCreateStep;
