import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.9,
      height: 60,
      flex: 1,
      backgroundColor: colors.medium,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.gold,
      marginTop: 10,
      flexDirection: 'row',
    },
    link: {
      width: '80%',
    },
    text: {
      color: colors.light,
      textAlign: 'center',
    },
    qrButton: {
      position: 'absolute',
      right: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: colors.medium,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      maxHeight: '80%',
      width: '90%',
    },
    modalTitle: {
      color: colors.light,
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    qrCodeContainer: {
      backgroundColor: colors.light,
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    qrDataContainer: {
      width: '100%',
      maxHeight: 200,
      marginBottom: 20,
      backgroundColor: colors.dark,
      borderRadius: 10,
      padding: 12,
    },
    qrDataText: {
      color: colors.light,
      fontSize: 14,
    },
    qrPlaceholder: {
      alignItems: 'center',
      marginBottom: 20,
    },
    qrPlaceholderText: {
      color: colors.light,
      fontSize: 18,
      marginTop: 10,
    },
    qrPlaceholderSubtext: {
      color: colors.light,
      marginTop: 4,
      opacity: 0.8,
    },
    modalButtons: {
      flexDirection: 'row',
      marginTop: 20,
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    modalButton: {
      backgroundColor: colors.gold,
      padding: 10,
      borderRadius: 5,
      minWidth: 80,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 5,
    },
    downloadButton: {
      backgroundColor: colors.gold,
    },
    shareButton: {
      backgroundColor: colors.gold,
    },
    closeButton: {
      backgroundColor: colors.gold,
    },
    modalButtonText: {
      color: colors.dark,
      fontWeight: 'bold',
    },
  })

export default createStyles
