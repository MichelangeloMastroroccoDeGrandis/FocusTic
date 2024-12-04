export const handleSectionTypeSelection = ({index, setSectionType, openModal}) => {
    const sectionTypes = ['Text', 'Image', 'Video', 'Audio'];
    setSectionType(sectionTypes[index]);
    openModal();
  };