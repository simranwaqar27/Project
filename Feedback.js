import React  from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default class Home extends React.Component{
    render(){
      return(
        <View style={styles.container}>
            <View style={{alignItems:'flex-start', width:'100%'}}>
            <Text style={{fontSize:14, fontWeight:'bold', marginTop:10, marginLeft:3}}>Overall, how did you feel about the service?</Text>
            </View>
        </View>
       );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-right',
      
    },
  });