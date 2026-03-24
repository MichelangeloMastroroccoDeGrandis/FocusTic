import { Card } from '@rneui/themed';
import { TouchableOpacity, Text } from 'react-native';
import { handleRemoveSection } from "./HandleRemoveSection";
import createStyles from '../../../style/CardWrapContent';
import { useThemeStyles } from '../../../app/context/ThemeContext';

const CardWrapContent = ({children, step, type, index, list, id, setList}) => {
    const styles = useThemeStyles(createStyles);

    return (
        <Card containerStyle={styles.container}>
            <Text style={styles.text}>Step: {step}</Text>
            <Text style={styles.text}>Type: {type}</Text>
            {children}
            <TouchableOpacity style={styles.buttonReverse} onPress={() => handleRemoveSection({index, list, id, setList})}>
                <Text style={styles.buttonTextReverse}>Remove</Text>
            </TouchableOpacity>
        </Card>
    )
}

export default CardWrapContent;
