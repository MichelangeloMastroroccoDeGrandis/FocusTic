import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, Image } from 'react-native';
import { useState } from "react";
import { useItems, ItemProvider } from "../context/ItemContext";
import styles from "../../style/id";
import ModalCreateStep from "../../components/Settings/ModalCreateStep";
import { Button, ButtonGroup } from "@rneui/base";
import { Card } from '@rneui/themed';
import { Audio } from 'expo-av';

const ItemPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { title, id } = params;
  const { list, setList } = useItems();
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [videoUri, setVideoUri] = useState(null);
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const [audioPlayback, setAudioPlayback] = useState(new Audio.Sound());

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setInputValue('');
    setModalVisible(false);
  }

  const AddItemAndCloseModal = (type, content) => {
    const updatedList = [...list];
    const itemToUpdate = updatedList[id2];

    if (itemToUpdate) {
      itemToUpdate.sections = itemToUpdate.sections || [];

      let newSection = null;

      if (type === 'Text') {
        newSection = {
          step: itemToUpdate.sections.length + 1,
          type: 'text',
          content: inputValue,
        };
      } else if (type === 'Image') {
        newSection = {
          step: itemToUpdate.sections.length + 1,
          type: 'image',
          content: content,  
        };
      } else if (type === 'Video') {
        newSection = {
          step: itemToUpdate.sections.length + 1,
          type: 'video',
          content: videoUri,  
          thumbnail: thumbnailUri,  
        };
        
      } else if (type === 'Audio') {
        newSection = {
          step: itemToUpdate.sections.length +1,
          type: 'audio',
          content: content
        }
        
      }

      if (newSection) {
        itemToUpdate.sections.push(newSection);
      }
    }

    setList(updatedList);
    setInputValue('');
    setVideoUri(null);
    setThumbnailUri(null);
    setModalVisible(false);
  };

  const removeSection = (index) => {
    const updatedList = [...list];
    const itemToUpdate = updatedList[id2];

    if (itemToUpdate) {
      itemToUpdate.sections.splice(index, 1);
      itemToUpdate.sections.forEach((section, idx) => {
        section.step = idx + 1;  
      });
      setList(updatedList); 
    }
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  }

  const playAudio = async (uri) => {
    try {
      await audioPlayback.loadAsync({ uri }, { shouldPlay: true });
    } catch (error) {
      console.error('Error playing audio: ', error);
    }
  };

  const displaySectionsText = (input, index) => {
    if (input.type === 'text') {
      return (
        <Card>
          <Text>Step: {input.step}{'\n'}</Text>
          <Text>Type: {input.type}{'\n'}</Text>
          <Text>Content: {input.content}{'\n'}</Text>
          <Button onPress={() => removeSection(index)} title="Remove" />
        </Card>
      )
    } else if (input.type === 'image') {
      return (
        <Card>
          <Text>Step: {input.step}{'\n'}</Text>
          <Text>Type: {input.type}{'\n'}</Text>
          <Image source={{ uri: input.content }} style={styles.image} />
          <Button onPress={() => removeSection(index)} title="Remove" />
        </Card>
      )
    } else if (input.type === 'video') {
      return (
        <Card>
          <Text>Step: {input.step}{'\n'}</Text>
          <Text>Type: {input.type}{'\n'}</Text>
          {input.thumbnail && <Image source={{ uri: input.thumbnail }} style={styles.thumbnail} />}
          <Button onPress={() => removeSection(index)} title="Remove" />
        </Card>
      )
    } else if (input.type === 'audio') {
      return (
        <Card>
          <Text>Step: {input.step}{'\n'}</Text>
          <Text>Type: {input.type}{'\n'}</Text>
          <Button onPress={() => playAudio(input.content)} title="Play Audio" />
          <Button onPress={() => removeSection(index)} title="Remove" />
        </Card>
      );
    }
  }

  const createSection = (input) => {
    setSectionType(input);
    openModal();
  }

  const id2 = id - 1;

  if (!list || list.length === 0 || !list[id2]) {
    return (
      <View style={styles.container}>
        <Text>Item not found or invalid ID</Text>
        <Button onPress={() => router.back()} title="Home" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Button
          onPress={() => router.back()}
          title={'\u2190'}
          buttonStyle={styles.buttonBack}
          titleStyle={styles.buttonBackText}
          type="outline"
        />
        {title}
      </Text>
      <FlatList
        data={list[id2].sections}
        renderItem={({ item, index }) => (
          <View key={index}>{displaySectionsText(item, index)}</View>
        )}
        keyExtractor={(index) => index.toString()}
      />
      <ButtonGroup
        buttons={['Text', 'Image', 'Video', 'Audio']}
        onPress={(index) => createSection(['Text', 'Image', 'Video', 'Audio'][index])}
      />
      <ModalCreateStep
        type={sectionType}
        modalVisible={modalVisible}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        AddItemAndCloseModal={AddItemAndCloseModal}
        closeModal={closeModal}
        setVideoUri={setVideoUri}
        setVideoThumbnail={setThumbnailUri}
      />
    </View>
  );
}

const ItemPageWithProvider = () => {
  return (
    <ItemProvider>
      <ItemPage />
    </ItemProvider>
  );
};

export default ItemPageWithProvider;
