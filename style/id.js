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
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5

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
    },
    buttonBack: {
      borderColor: '#2196F3',  
      borderWidth: 2,          
      paddingHorizontal: 20,    
      paddingVertical: 2,     
      borderRadius: 8,         
      width: 60,              
      marginTop: 10,
    },
    buttonBackText: {
      fontSize: 24,          
      color: '#2196F3',       
    },
    image: {
      width: 200,
      height: 200,
    }
})

export default styles