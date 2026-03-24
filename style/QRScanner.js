import { StyleSheet, Dimensions } from 'react-native';

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.dark,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.medium,
    },
    title: {
      color: colors.light,
      fontSize: 18,
      fontWeight: 'bold',
    },
    closeButton: {
      padding: 5,
    },
    camera: {
      flex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scanFrame: {
      width: 250,
      height: 250,
      borderWidth: 2,
      borderColor: colors.gold,
      borderRadius: 10,
      backgroundColor: 'transparent',
    },
    instruction: {
      color: colors.light,
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
      paddingHorizontal: 40,
    },
    scannedOverlay: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 20,
      borderRadius: 10,
    },
    scannedText: {
      color: colors.gold,
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    permissionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    permissionText: {
      color: colors.light,
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
    },
    permissionButton: {
      backgroundColor: colors.gold,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    permissionButtonText: {
      color: colors.dark,
      fontSize: 16,
      fontWeight: 'bold',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    textInput: {
      width: Dimensions.get('window').width * 0.9,
      minHeight: 160,
      backgroundColor: colors.medium,
      color: colors.light,
      borderColor: colors.gold,
      borderWidth: 1,
      borderRadius: 10,
      padding: 12,
      marginTop: 20,
    },
    importButton: {
      marginTop: 20,
      backgroundColor: colors.gold,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 5,
    },
    importButtonText: {
      color: colors.dark,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default createStyles;
