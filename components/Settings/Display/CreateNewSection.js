export const createNewSection = ({ type, content, itemToUpdate, inputValue, videoUri, thumbnailUri }) => {
    const step = itemToUpdate.sections.length + 1; // Compute step based on current sections
  
    switch (type) {
      case 'Text':
        return { step, type: 'text', content: inputValue };
      case 'Image':
        return { step, type: 'image', content };
      case 'Video':
        return { step, type: 'video', content: videoUri, thumbnail: thumbnailUri };
      case 'Audio':
        return { step, type: 'audio', content };
      default:
        return null;
    }
  };
  