import uuid from 'react-native-uuid';

export const createNewSection = ({ type, content, itemToUpdate, inputValue, videoUri, thumbnailUri }) => {
    const step = itemToUpdate.sections.length + 1; // Compute step based on current sections
  
    switch (type) {
      case 'Text':
        return { id: uuid.v4(), step, type: 'text', content: inputValue };
      case 'Image':
        return { id: uuid.v4(), step, type: 'image', content };
      case 'Video':
        return { id: uuid.v4(), step, type: 'video', content: videoUri, thumbnail: thumbnailUri };
      case 'Audio':
        return { id: uuid.v4(), step, type: 'audio', content };
      default:
        return null;
    }
  };
  