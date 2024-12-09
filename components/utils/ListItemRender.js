import { View, Text } from "react-native";
import { Link } from "expo-router";
import styles from "../../style/listItemRender";

const ListItemRender = ({ item, type }) => {
    const pathname = type === 'section' ?'/sections/[item]' : '/items/[id]';
    return( 
        <View style={styles.container}>
            <Link  key={item.id} href={{
              pathname,
              params: { id: item.id, 
                        title: item.text
              }
            }}>
                <Text style={styles.item} numberOfLines={2}>{item.text}</Text>
            </Link>
        </View>
    )
}

export default ListItemRender;