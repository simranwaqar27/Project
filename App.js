import React from 'react';
import { StyleSheet, Button,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './component/Home'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Features from "./component/Features";
import Setting from "./component/Setting";


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Features" component={Features}/>
      <Stack.Screen name="Setting" component={Setting}/>
    </Stack.Navigator>
  );
}




export default class App extends React.Component{
  render(){
    return(

    <NavigationContainer>
      <MyStack/>
    </NavigationContainer> 
    
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});