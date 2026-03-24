import { View, FlatList } from 'react-native';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import DeleteButton from '../context/DeleteButton';
import ListItemRender from '../../components/utils/ListItemRender';
import createStyles from '../../style/index';
import { useThemeStyles } from '../context/ThemeContext';

export default function Tab() {
  const { list } = useContext(ItemContext);
  const styles = useThemeStyles(createStyles);

  return (
  <>
    <View style={styles.container}>
      <FlatList data={list} renderItem={({item}) => <ListItemRender item={item} type="section" list={list} />} keyExtractor={(item, index) => item.id ? item.id.toString() : `section-${index}`} />
    </View>
    <View style={styles.bottom}>
      <DeleteButton />
    </View>
  </>
  );
}
