export const colorPalettes = {
  classic: {
    label: 'Classic',
    dark: '#111111',
    medium: '#2f2f2f',
    light: '#f6f6f6',
    gold: '#ffcb74',
  },
  ocean: {
    label: 'Ocean',
    dark: '#0f172a',
    medium: '#1d4e89',
    light: '#e0f2fe',
    gold: '#38bdf8',
  },
  forest: {
    label: 'Forest',
    dark: '#0f1f17',
    medium: '#2f5d50',
    light: '#eef6f0',
    gold: '#9bd18b',
  },
};

export const defaultPaletteName = 'classic';

export const getPaletteColors = (paletteName) =>
  colorPalettes[paletteName] || colorPalettes[defaultPaletteName];

export const paletteEntries = Object.entries(colorPalettes).map(([key, palette]) => ({
  key,
  label: palette.label,
  colors: palette,
}));

export default getPaletteColors(defaultPaletteName);
