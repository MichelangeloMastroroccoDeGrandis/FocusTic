import { Image } from 'react-native';
import styles from '../../style/CardImageContent';

const CardImageContent = ({content}) => {
    return <Image style={styles.image} source={{ uri: content }} />
}

export default CardImageContent