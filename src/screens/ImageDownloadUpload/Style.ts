import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
     
    },
    uploadContainer:{
      flex: 2, 
      alignItems: 'center',
       justifyContent: 'center',
    },
   
    button: {
   
      width: '80%',
      paddingTop: 3,
      paddingBottom: 3,
      backgroundColor: '#2E7D32',
      borderRadius: 7,
      margin: 10
    },
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 5
    }
  });

  export {HomeStyles};