import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useItems, ItemProvider } from "../context/ItemContext";
import { Audio } from 'expo-av';
import { HandleModal } from '../../components/Hooks/HandleModal';
import { resetFormFields } from "../../components/Settings/Display/ResetFormField";
import { createNewSection } from "../../components/Settings/Display/CreateNewSection";
import CardWrap from "../../components/Settings/Display/CardWrap";
import { handleSectionTypeSelection } from "../../components/Settings/Display/HandleSectionTypeSelection";
import DisplayList from "../../components/Settings/Display/DisplayList";

const ItemPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [videoUri, setVideoUri] = useState(null);
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const [audioPlayback, setAudioPlayback] = useState(new Audio.Sound());

  const { title, id } = useLocalSearchParams();
  const { list, setList } = useItems();  
  const { openModal, closeModal } = HandleModal({ setModalVisible, setInputValue });

  const handleInputChange = (text) => setInputValue(text);

  const handleAddItemAndCloseModal = (type, content) => {
    const updatedList = [...list];
    const itemToUpdate = updatedList[id - 1];

    if (itemToUpdate) {
      itemToUpdate.sections = itemToUpdate.sections || [];
      const newSection = createNewSection({ type, content, itemToUpdate, inputValue, videoUri, thumbnailUri });
      if (newSection) itemToUpdate.sections.push(newSection);
    }

    setList(updatedList);
    resetFormFields({ setInputValue, setVideoUri, setThumbnailUri, setModalVisible });
  };

  const displaySectionContent = (section, index) => {
    const { step, type, content, thumbnail } = section;
    
    return <CardWrap 
              step={step} 
              type={type} 
              content={content} 
              setList={setList} 
              list={list} 
              id={id} 
              index={index} 
              thumbnail={thumbnail} 
              audioPlayback={audioPlayback} />
  };

  const id2 = id - 1;

  return (
    <DisplayList 
      title={title} list={list} id2={id2} displaySectionContent={displaySectionContent}
      handleSectionTypeSelection={handleSectionTypeSelection} setSectionType={setSectionType}
      openModal={openModal} sectionType={sectionType} modalVisible={modalVisible}
      inputValue={inputValue} handleInputChange={handleInputChange}
      handleAddItemAndCloseModal={handleAddItemAndCloseModal} closeModal={closeModal}
      setVideoUri={setVideoUri} setThumbnailUri={setThumbnailUri}
    />
  );
};

const ItemPageWithProvider = () => (
  <ItemProvider>
    <ItemPage />
  </ItemProvider>
);

export default ItemPageWithProvider;
