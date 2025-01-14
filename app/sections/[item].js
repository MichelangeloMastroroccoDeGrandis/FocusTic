import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useItems, ItemProvider } from "../context/ItemContext";
import DisplaySectionsToCheck from "../../components/Home/DisplaySectionsToCheck";
import styles from '../../style/index'


const SectionPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { title, id } = params;
  const {list } = useItems();

  const id2 = id - 1;

  console.log(list[id2])

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
        <FlatList data={list[id2].sections} renderItem={({item}) => <DisplaySectionsToCheck input={item} /> } keyExtractor={(index) => index.toString()} />
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
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