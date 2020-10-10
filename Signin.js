import React  from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

export default class Signin extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30, fontWeight:'bold', alignItems:'center', marginTop:5}}>Sign in</Text>
        <View style={{width:"100%", alignItems:'flex-right'}}>
      <Text style={{marginTop:70, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Email Address</Text>
      <TextInput  placeholder="Your Email Address" style={{borderColor:"grey", borderWidth:2, alignItems:"center", margin:10, height:50, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      <Text style={{marginTop:30, fontWeight:'bold', fontSize:14, marginHorizontal:10}}>Password</Text>
      <TextInput placeholder="********" style={{borderColor:"grey", borderWidth:2, margin:10, height:50, placeholderTextColor:"grey", marginHorizontal:10, paddingVertical:0, borderRadius:5}}/>
      </View>
      <View style={{width:'50%', marginTop:20}}>
        <Button
        title="Login" 
        onPress={() =>
          this.props.navigation.navigate('Features')
        }  
        />
    </View>
    <View style={{alignItems:'center', fontWeight:20, marginTop:20}}>
      <Text>Reset Password</Text>
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