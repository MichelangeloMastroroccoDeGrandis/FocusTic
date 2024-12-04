import { Card } from '@rneui/themed';
import { Text } from "react-native";
import { Button } from "@rneui/base";
import { handleRemoveSection } from "./HandleRemoveSection";
const CardWrapContent = ({children, step, type, index, list, id, setList}) => {
    return (
        <Card>
            <Text>Step: {step}</Text>
            <Text>Type: {type}</Text>
            {children}
            <Button onPress={() => handleRemoveSection({index, list, id, setList})} title="Remove" />
        </Card>
    )
}

export default CardWrapContent;