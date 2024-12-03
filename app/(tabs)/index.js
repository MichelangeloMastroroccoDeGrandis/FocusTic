import { View, FlatList } from 'react-native';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import DeleteButton from '../context/DeleteButton';
import ListItemRender from '../../components/utils/ListItemRender';
import styles from '../../style/index';

export default function Tab() {

  const {list} = useContext(ItemContext);

  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={({item}) => <ListItemRender item={item} type="section" />} keyExtractor={item => item.id.toString()} />
      <DeleteButton />
    </View>
  );
}
