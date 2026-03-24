import { Slot } from 'expo-router';
import { ItemProvider } from './context/ItemContext';
import { ThemeProvider } from './context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ItemProvider>
        <Slot />
      </ItemProvider>
    </ThemeProvider>
  );
}
