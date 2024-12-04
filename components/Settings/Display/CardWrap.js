import { Button } from "@rneui/base";
import { Text, Image } from "react-native";
import styles from "../../../style/id";
import CardWrapContent from "./CardWrapContent";

const CardWrap = ({step, type, content, setList, list, id, index, thumbnail, audioPlayback}) => {

  const playAudio = async (uri) => {
    try {
      await audioPlayback.loadAsync({ uri }, { shouldPlay: true });
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

    switch (type) {
        case 'text':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              <Text>Content: {content}</Text>
            </CardWrapContent>
            
          );
        case 'image':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              <Image source={{ uri: content }} style={styles.image} />
            </CardWrapContent>
            
          );
        case 'video':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              {thumbnail && <Image source={{ uri: thumbnail }} style={styles.thumbnail} />}
            </CardWrapContent>
          );
        case 'audio':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              <Button onPress={() => playAudio(content)} title="Play Audio" />
            </CardWrapContent>
          );
        default:
          return null;
      }
}

export default CardWrap;