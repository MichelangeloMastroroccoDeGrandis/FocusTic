import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  colorPalettes,
  defaultPaletteName,
  getPaletteColors,
  paletteEntries,
} from '../../style/colors';

const ThemeContext = createContext();
const STORAGE_KEY = 'selectedPalette';

export const ThemeProvider = ({ children }) => {
  const [paletteName, setPaletteName] = useState(defaultPaletteName);

  useEffect(() => {
    const loadPalette = async () => {
      try {
        const storedPalette = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedPalette && colorPalettes[storedPalette]) {
          setPaletteName(storedPalette);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadPalette();
  }, []);

  useEffect(() => {
    const savePalette = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, paletteName);
      } catch (error) {
        console.log(error);
      }
    };

    savePalette();
  }, [paletteName]);

  const colors = useMemo(() => getPaletteColors(paletteName), [paletteName]);

  const value = useMemo(
    () => ({
      colors,
      paletteName,
      setPaletteName,
      palettes: paletteEntries,
    }),
    [colors, paletteName]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export const useThemeColors = () => useTheme().colors;

export const useThemeStyles = (createStyles) => {
  const colors = useThemeColors();
  return useMemo(() => createStyles(colors), [colors, createStyles]);
};
