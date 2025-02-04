import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useItems, ItemProvider } from "../context/ItemContext";
import DisplaySectionsToCheck from "../../components/Home/DisplaySectionsToCheck";
import styles from '../../style/index'
import { useState, useEffect } from "react";


const SectionPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { title, id } = params;
  const {list } = useItems();
  const [checkboxStates, setCheckboxStates] = useState({})

  const id2 = id - 1;

  useEffect(() => {
    if (list[id2]?.sections) {
      const initialStates = list[id2].sections.reduce((acc, section) => {
        acc[section.id] = false; 
        return acc;
      }, {});
      setCheckboxStates(initialStates);
    }
  }, [list, id2]);

  const handleCheckboxToggle = (sectionId) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [sectionId]: !prevStates[sectionId],
    }));
  };

  const allChecked = Object.values(checkboxStates).every((checked) => checked);

  if (!list || list.length === 0 || !list[id2]) {
    return (
      <View style={styles.container}>
        <Text>Item not found or invalid ID</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
        <FlatList data={
          list[id2].sections} 
          renderItem={({item}) => <DisplaySectionsToCheck 
                                    input={item} 
                                    handleCheckboxToggle={handleCheckboxToggle} 
                                    checked={checkboxStates[item.id]} /> } 
          keyExtractor={(item) => item.id} />
          {allChecked && (
              <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Return to Home</Text>
              </TouchableOpacity>
          )}
        
    </View>
  );
}

const ItemPageWithProvider = () => {
    return (
      <ItemProvider>
        <SectionPage />
      </ItemProvider>
    );
  };
  
  export default ItemPageWithProvider;