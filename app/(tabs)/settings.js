import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { paletteEntries } from '../../style/colors';
import { useTheme, useThemeColors } from '../context/ThemeContext';

export default function SettingsTab() {
  const { paletteName, setPaletteName } = useTheme();
  const colors = useThemeColors();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Settings</Text>
        <Text style={styles.subheading}>Color palette</Text>
        <Text style={styles.helper}>
          Add or edit palettes in `style/colors.js`, then choose them here.
        </Text>

        {paletteEntries.map((palette) => {
          const isActive = palette.key === paletteName;

          return (
            <TouchableOpacity
              key={palette.key}
              style={[
                styles.paletteCard,
                {
                  borderColor: isActive ? colors.gold : palette.colors.gold,
                  backgroundColor: palette.colors.medium,
                },
              ]}
              onPress={() => setPaletteName(palette.key)}
            >
              <View>
                <Text style={[styles.paletteTitle, { color: palette.colors.light }]}>
                  {palette.label}
                </Text>
                <Text style={[styles.paletteMeta, { color: palette.colors.light }]}>
                  {isActive ? 'Active palette' : 'Tap to apply'}
                </Text>
              </View>

              <View style={styles.swatchRow}>
                <View style={[styles.swatch, { backgroundColor: palette.colors.dark }]} />
                <View style={[styles.swatch, { backgroundColor: palette.colors.medium }]} />
                <View style={[styles.swatch, { backgroundColor: palette.colors.light }]} />
                <View style={[styles.swatch, { backgroundColor: palette.colors.gold }]} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.dark,
    },
    content: {
      padding: 20,
      gap: 16,
    },
    heading: {
      color: colors.light,
      fontSize: 28,
      fontWeight: '700',
    },
    subheading: {
      color: colors.gold,
      fontSize: 20,
      fontWeight: '600',
    },
    helper: {
      color: colors.light,
      fontSize: 15,
      lineHeight: 22,
    },
    paletteCard: {
      borderWidth: 2,
      borderRadius: 14,
      padding: 16,
      gap: 14,
    },
    paletteTitle: {
      fontSize: 18,
      fontWeight: '700',
    },
    paletteMeta: {
      marginTop: 4,
      fontSize: 14,
    },
    swatchRow: {
      flexDirection: 'row',
      gap: 10,
    },
    swatch: {
      flex: 1,
      height: 32,
      borderRadius: 999,
    },
  });
