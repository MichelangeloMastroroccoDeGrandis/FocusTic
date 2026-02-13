import { useRouter } from "expo-router";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup } from "@rneui/base";
import ModalCreateStep from "../Modal/ModalCreateStep";
import styles from "../../../style/DisplayList";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from "../../../style/colors";

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
            <View >
            <Text>Item not found or invalid ID</Text>
            <Button onPress={() => router.back()} title="Home" />
            </View>
        );
        }

        console.log(list[id2].sections);
    
    return (
    <View style={styles.container}>
      
      <View style={styles.flex}>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome size={18} name="arrow-left" color={colors.gold} />
        </TouchableOpacity>
        
        <Text style={styles.text}>{title}</Text>
      </View>
      
      
      <FlatList
        data={list[id2].sections}
        renderItem={({ item, index }) => (
          <View key={item.id} style={index === list[id2].sections.length - 1 ? { paddingBottom: 40 } : {}}>
            {displaySectionContent(item, index)}
          </View>
        )}
        keyExtractor={(item, index) => item.id ? item.id.toString() : `section-${index}`}
      />
      <ButtonGroup
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.button}
        selectedButtonStyle={styles.selectedButton}
        textStyle={styles.buttonText}
        style={styles.buttonGroup}
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