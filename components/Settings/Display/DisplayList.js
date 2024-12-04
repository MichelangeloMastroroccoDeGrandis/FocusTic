import { useRouter } from "expo-router";
import { View, Text, FlatList } from 'react-native';
import { Button, ButtonGroup } from "@rneui/base";
import styles from '../../../style/id';
import ModalCreateStep from "../Modal/ModalCreateStep";

const DisplayList = ({ 
    title, 
    list, 
    id2, 
    displaySectionContent, 
    handleSectionTypeSelection,
    setSectionType,
    openModal,
    sectionType,
    modalVisible,
    inputValue,
    handleInputChange,
    handleAddItemAndCloseModal,
    closeModal,
    setVideoUri,
    setThumbnailUri
    }) => {

    const router = useRouter();

    if (!list || !list[id2]) {
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
          <View key={index}>{displaySectionContent(item, index)}</View>
        )}
        keyExtractor={(index) => index.toString()}
      />
      <ButtonGroup
        buttons={['Text', 'Image', 'Video', 'Audio']}
        onPress={(index) => handleSectionTypeSelection({index, setSectionType, openModal})}
      />
      <ModalCreateStep
        type={sectionType}
        modalVisible={modalVisible}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        AddItemAndCloseModal={handleAddItemAndCloseModal}
        closeModal={closeModal}
        setVideoUri={setVideoUri}
        setVideoThumbnail={setThumbnailUri}
      />
    </View>
    )
}

export default DisplayList