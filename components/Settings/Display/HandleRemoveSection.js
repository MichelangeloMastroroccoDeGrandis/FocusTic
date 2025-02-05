export const handleRemoveSection = ({ index, list, id, setList }) => {
  const updatedList = [...list];

  console.log("Looking for section ID:", id);
  console.log("Current List:", updatedList);

  let sectionFound = false;

  updatedList.forEach(item => {
      if (Array.isArray(item.sections)) {
          const sectionIndex = item.sections.findIndex(section => String(section.id) === String(id));

          if (sectionIndex !== -1) {
              console.log(`Found section in item with text: ${item.text}`);

              item.sections.splice(sectionIndex, 1);
              
              // Recalculate step numbers
              item.sections.forEach((section, idx) => section.step = idx + 1);

              sectionFound = true;
          }
      }
  });

  if (sectionFound) {
      setList(updatedList);
  } else {
      console.warn(`Section with id ${id} not found.`);
  }
};
