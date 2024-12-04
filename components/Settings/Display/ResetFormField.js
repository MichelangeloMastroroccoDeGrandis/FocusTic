export const resetFormFields = ({setInputValue, 
                        setVideoUri, 
                        setThumbnailUri,
                        setModalVisible}) => {
    setInputValue('');
    setVideoUri(null);
    setThumbnailUri(null);
    setModalVisible(false);
  };