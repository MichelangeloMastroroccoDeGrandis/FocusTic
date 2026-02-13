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
    const [timer, setTimer] = useState(false);
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    // Request the required media permissions on mount
    useEffect(() => {
        const getPermissions = async () => {
            try {
                const photoPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setMediaPermission(photoPermission.granted);
            } catch (error) {
                console.error('Permission request failed:', error);
                setMediaPermission(false);
            }
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

            try {
                // Create an asset from the video URI
                const asset = await MediaLibrary.createAssetAsync(videoUri);
                
                // Get the asset info which includes the thumbnail
                const info = await MediaLibrary.getAssetInfoAsync(asset.id);
                
                if (info && info.thumbnail) {
                    setThumbnail(info.thumbnail);
                    setVideoUri(videoUri);
                    setVideoThumbnail(info.thumbnail);
                } else {
                    console.error('Failed to extract thumbnail from video');
                    // Fallback to using the video URI as thumbnail
                    setThumbnail(videoUri);
                    setVideoUri(videoUri);
                    setVideoThumbnail(videoUri);
                }
            } catch (error) {
                console.error('Error processing video:', error);
                // Fallback to using the video URI as thumbnail
                setThumbnail(videoUri);
                setVideoUri(videoUri);
                setVideoThumbnail(videoUri);
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
                timer={timer}
                setTimer={setTimer}
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
                hours={hours}
                setHours={setHours}
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
                inputValue={inputValue}
                handleInputChange={handleInputChange}
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
                inputValue={inputValue}
                handleInputChange={handleInputChange}
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
                inputValue={inputValue}
                handleInputChange={handleInputChange}
            /> 
        )
    }
};


export default ModalCreateStep;
