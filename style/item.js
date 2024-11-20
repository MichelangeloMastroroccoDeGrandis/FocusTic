import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
      },
    title: {
        marginVertical: 20
    },
    button: {
        justifyContent: 'flex-end'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    card: {
      flex: 1,
      marginVertical: 12,  
      marginHorizontal: 15,
      paddingVertical: 30,  
      paddingHorizontal: 30,  
      borderRadius: 8,  
      backgroundColor: '#fff',  
      borderWidth: 1,  
      borderColor: '#ddd',  
      shadowColor: '#000', 
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.1,  
      shadowRadius: 6,  
      elevation: 5,  
      justifyContent: 'flex-start',  
      alignItems: 'flex-start',  
    }
})

export default styles