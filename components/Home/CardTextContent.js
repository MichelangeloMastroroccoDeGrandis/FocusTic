import { Text } from '@rneui/base';
import colors from '../../style/colors';

const CardTextContent = ({content}) => {
    return <Text style={{color: colors.light, fontSize: 18}}>{content} {'\n'}</Text>
}

export default CardTextContent