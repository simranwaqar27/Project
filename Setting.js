import React from 'react';
import {   SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'My Profile',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'ResourceFile',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'FAQ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Give Feedback',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Contact us',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'About us',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Privacy and Policy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Logout',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <  SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default App;
