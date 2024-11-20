import { useState, createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const storedList = await AsyncStorage.getItem('items');
                if(storedList) {
                    setList(JSON.parse(storedList));
                }
            } catch(err) {
                console.log(err);
            }
        };
        loadItems();
    }, []);

    useEffect(() => {
        const saveItems = async () => {
            try {
                await AsyncStorage.setItem('items', JSON.stringify(list))
            } catch (err) {
                console.log(err)
            }
        };
        if(list.length > 0) {
            saveItems();
        }
    }, [list])

    return (
        <ItemContext.Provider value={{list, setList}}>
            {children}
        </ItemContext.Provider>
    )
}



export const useItems = () => {
    const context = useContext(ItemContext);
    if (!context) {
      throw new Error('useItems must be used within an ItemProvider');
    }
    return context;
  };