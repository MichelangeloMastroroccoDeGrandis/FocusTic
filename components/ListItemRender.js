import { View } from "react-native";
import { Link } from "expo-router";

const ListItemRender = ({ item, type }) => {
    const pathname = type === 'section' ?'/sections/[item]' : '/items/[id]';
    return( 
        <View>
            <Link key={item.id} href={{
              pathname,
              params: { id: item.id, 
                        title: item.text
              }
            }}>{item.text}</Link>
        </View>
    )
}

export default ListItemRender;