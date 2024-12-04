export const HandleModal = ({setModalVisible, setInputValue}) => {

    // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setInputValue('');
    setModalVisible(false);
  };

  return { openModal, closeModal}

}