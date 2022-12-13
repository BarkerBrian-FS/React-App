import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import ListContainer from '../components/ListContainer';
import Details from './Details'
import Dashboard from './Dashboard'

export default function Home() {
  fetch(`https://crud-api-dwa-463.herokuapp.com/api/v1/games`)
  .then(res => res.json())
  .then(data => console.log({data}));
  return (
    <SafeAreaView style={styles.container}>
      <Text >Home</Text>
      <Heading></Heading>
      <ListContainer/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
