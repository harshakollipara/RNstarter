import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        justifyContent: "center",
        margin: 5,
        backgroundColor : '#ddd'
    },
    rootView: {
        padding: 4,
        height : 200,
        color : '#555',
        backgroundColor : '#fff',
        margin : 2,

    },
    rootText : {
        textAlign : 'center'
    },
    headerText : {
        fontSize : 17,
        padding : 4,
        textAlign : "left"
    },
    ItemSeparator : {
        height: 1,
        margin : 2,  
        width: "100%",  
        backgroundColor: "#ddd",  
      },
    container: {
        alignItems : 'center',
        justifyContent: 'center',
    },
    viewStyle: {
        flexDirection: 'row',
        padding: 20,
        justifyContent : 'space-evenly'
    },
    inputStyle: {
        color: '#333',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 12.5,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10
    },
    textStyle : {
        width: 100,
        height: 50,
        borderWidth: 1,
        fontSize: 20,
        backgroundColor: '#333',
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        borderRadius: 12.5,
    },
    ViewTextStyle : {
        width : 300,
        height : 75,
        color : '#fff',
        backgroundColor : '#0E4D92',
        borderRadius : 10,
        fontSize : 25,
        textAlign : 'center',
        padding : 15
    },
    resultText : {
        fontSize : 20,
        color : '#ff0000'
    },
    buttonStyle : {
        borderColor : '#333',
        backgroundColor : '#333',
        width : '90%',
        height  :50,
        borderWidth : 1,
        borderRadius : 12.5,
        margin : 5
    },
    buttonText : {
        fontSize : 20, 
        color : '#fff', 
        padding : 8, 
        textAlign  :'center'
    }
});