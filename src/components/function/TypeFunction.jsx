const typeFunction = async (allTypes, typeLanguage, setTypeLanguage, language) => {
    try {
      setTypeLanguage([]);
      
      const fetchPromises = allTypes.map(async (item) => {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${item.id}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        return data; 
      });
  
      const languageOfType = await Promise.all(fetchPromises);
  
      const updatedTypes = languageOfType.map((typeItem, index) => {
        const filteredName = typeItem.names.find(
          (filterItem) => filterItem.language.name === language
        );
        return {
          typ: filteredName ? filteredName.name : "Unknown", 
          symbol: allTypes[index].symbol, 
          id: allTypes[index].id
        };
      });
  
      setTypeLanguage(updatedTypes);
  
      console.log(updatedTypes); 
    } catch (error) {
      console.error("Fehler beim Abrufen der Typdaten:", error);
    }
  };
  
  export { typeFunction };
  