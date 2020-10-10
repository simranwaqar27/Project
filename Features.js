import React  from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default class Features extends React.Component{
  render(){
    return(
        <View style={{backgroundColor:'#00B2EE'}}>
        <View style={{backgroundColor:'#05B8CC',height:100}}>
    <Text>{"\n"}</Text>
       <Icon name="tasks" size={35} color="white"> Zurvos Dashboard</Icon>
        </View>
      <View style={styles.container}>
         <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
          <View style={styles.boxes}>
          <TouchableOpacity>
          <Icon name="rocket" size={50} color="white" />
          <Text style={styles.boxText}>Medication</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boxes}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Settings')}}>
          <Icon name="briefcase" size={50} color="white" />
          <Text style={styles.boxText}>Setting</Text>
          </TouchableOpacity>
            </View> 
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
          <View style={styles.boxes}>
          <TouchableOpacity>
          <Icon name="cloud" size={50} color="white" />
          <Text style={styles.boxText}>Weather</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boxes}>
          <TouchableOpacity> 
          <Icon name="language" size={50} color="white" style={{marginLeft:10}} />
          <Text style={styles.boxText}>Language</Text>
          </TouchableOpacity>
            </View> 
        </View>
        <View style={{flex: 1, flexDirection: 'row',}}>
          <View style={styles.boxes}>
          <TouchableOpacity>
          <Icon name="steam" size={50} color="white" />
          <Text style={styles.boxText}>Steam</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boxes}>
          <TouchableOpacity> 
          <Icon name="wifi" size={50} color="white" />
          <Text style={styles.boxText}>   WiFi</Text>
          </TouchableOpacity>
            </View> 
        </View>
      
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
          <View style={styles.boxes}>
          <TouchableOpacity>
          <Icon name="laptop" size={50} color="white" />
          <Text style={styles.boxText}> Laptop</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boxes}>
          <TouchableOpacity> 
          <Icon name="university" size={50} color="white" style={{marginLeft:8}}/>
          <Text style={styles.boxText}>University</Text>
          </TouchableOpacity>
            </View> 
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
          <View style={styles.boxes}>
          <TouchableOpacity>
          <Icon name="facebook-official" size={50} color="white" style={{marginLeft:10}}/>
          <Text style={styles.boxText}>Facebook</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boxes}>
          <TouchableOpacity> 
          <Icon name="google" size={50} color="white" />
          <Text style={styles.boxText}>Google</Text>
          </TouchableOpacity>
            </View> 
        </View>
      </View>
      <View style={{width:"100%", marginTop: 5}}>
      <Button
      onPress={() =>
        this.props.navigation.navigate('Setting')
      }
      title="Settings"
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
  boxes:{
    width: '50%',
    height: 150,
    backgroundColor: '#63D1F4',
    margin:5 ,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
      shadowOffset: {
	        width: 0,
	        height: 6,
      },
shadowOpacity: 0.39,
shadowRadius: 8.30,
elevation: 13,
},
boxText: {
  color:'white',
  fontWeight:'bold'
}
});