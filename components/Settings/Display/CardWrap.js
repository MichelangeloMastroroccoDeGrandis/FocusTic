import { Text, Image, TouchableOpacity } from "react-native";
import CardWrapContent from "./CardWrapContent";
import styles from "../../../style/CardWrap";

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
              <Text style={styles.text}>Content:</Text>
              <Text style={styles.text}>{content}</Text>
            </CardWrapContent>
            
          );
        case 'image':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              <Image source={{ uri: content }} />
            </CardWrapContent>
            
          );
        case 'video':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              {thumbnail && <Image source={{ uri: thumbnail }} />}
            </CardWrapContent>
          );
        case 'audio':
          return (
            <CardWrapContent step={step} type={type} index={index} list={list} id={id} setList={setList}>
              <TouchableOpacity style={styles.button} onPress={() => playAudio(content)}>
                <Text style={styles.buttonText}>Play Audio</Text>
              </TouchableOpacity>
            </CardWrapContent>
          );
        default:
          return null;
      }
}

export default CardWrap;