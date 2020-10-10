import React  from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

export default class Signup extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30, fontWeight:'bold', alignItems:'center', marginTop:15}}>Sign Up</Text>
        <Text style={{marginTop:10}}>Enter your personal information </Text>
      
        <View style={{width:"100%", alignItems:'flex-start'}}>
        <Text style={{marginTop:15, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Full Name</Text>
      <TextInput style={{borderColor:"grey", borderWidth:2, alignItems:"center", margin:5, height:30, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      <Text style={{marginTop:15, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Email</Text>
      <TextInput  placeholder="Your Email Address" style={{borderColor:"grey", borderWidth:2, alignItems:"center", margin:10, height:30, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      <Text style={{marginTop:15, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Password</Text>
      <TextInput placeholder="********" style={{borderColor:"grey", borderWidth:2, margin:5, height:30, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      <Text style={{marginTop:15, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Re-enter Password</Text>
      <TextInput placeholder="********" style={{borderColor:"grey", borderWidth:2, margin:5, height:30, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      </View>
      <View style={{width:'80%', marginTop: 20}}>
        <Button
        title="NEXT"
        onPress={() =>
          this.props.navigation.navigate('Signin')
        }
        />
         <Text>{"\n"}</Text>
        <Button
        style={styles.button1}
        title="Skip"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
        />
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
  button1:{
    backgroundColor:'white',
    color:'black',
    borderColor:'white'
  }
});