import React  from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';




export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Image 
       style={{ width: 100, height: 100, alignItems:'center', justifyContent:'center'}}
      source={require('/Users/Waqar/Downloads/logo.png')}
      />
      <Text style={{fontWeight:'bold', fontSize: 28}}>Welcome to Zurvos</Text>
      <View style={{width:'50%', marginTop:100}}>
      
        <Button style={styles.Button}
        onPress={() =>
          this.props.navigation.navigate('Signup')
        }
        title='Sign Up'/>
        <Text>{"\n"}</Text>
        <Button style={styles.Button}
        onPress={() =>
          this.props.navigation.navigate('Signin')
        }
        title='login'/>
    </View>
    <View style={{marginTop: 20}}>
    <Text style={{marginBottom: 10}}>Or Continue with</Text>
    <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
          <Image source={require('/Users/Waqar/Downloads/fb.png')} style={{width:30,height:30,marginTop:3}}/>
          <Text style={{marginLeft:50,marginTop:-24,color:'white'}}>Facebook</Text>
        </TouchableOpacity>
    </View>



    </View>
       );
    }
  }
   
    
      
   

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    Button: {
      width:'100%', 
      height:'100%', 
      justifyContent: "center", 
      padding: 16
    },
    button1: {
      backgroundColor: '#3a5a99',
      borderRadius: 5,
      height:35,
      marginBottom: 20,
      width:150,
      
    },
  });