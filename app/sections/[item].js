import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useItems, ItemProvider } from "../context/ItemContext";
import DisplaySectionsToCheck from "../../components/Home/DisplaySectionsToCheck";
import styles from "../../style/item";


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
        <Button onPress={() => router.back()} title="Home" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        <FlatList data={list[id2].sections} renderItem={({item}) => <DisplaySectionsToCheck input={item} /> } keyExtractor={(index) => index.toString()} />
        <Button onPress={() => router.back()} title='Home' style={styles.button} />
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