import { Image } from 'react-native';

const CardImageContent = ({content}) => {
    return <Image source={{ uri: content.content }} style={{width: 200, height: 200}} />
}

export default CardImageContent