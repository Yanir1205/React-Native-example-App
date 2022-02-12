import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'#ff8'
    },
    logoContainer:{
      backgroundColor: '#f9f',
      alignItems: "center",
      padding:30, 
    },
    logoText: {
        fontSize: 24,
        fontWeight: '600',
        padding:10
    },
    logoDescription:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
    }
  });

  export default styles
  