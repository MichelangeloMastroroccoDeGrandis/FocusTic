export const handleRemoveSection = ({index, list, id, setList}) => {
    const updatedList = [...list];
    const itemToUpdate = updatedList[id - 1];

    if (itemToUpdate) {
      itemToUpdate.sections.splice(index, 1);
      itemToUpdate.sections.forEach((section, idx) => section.step = idx + 1);
      setList(updatedList);
    }
  };