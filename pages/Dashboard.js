import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../components/Heading';
import ListContainer from '../components/ListContainer';

export default function Dashboard() {

  const [games, setGames] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const {id} = useParams();
  const [values, setValues] = useState({
    name: '',
    genre: '',
    company: ''
  })

  //CREATE GAME
  const createGame = async () => {
    try{
      await fetch(`https://crud-api-dwa-463.herokuapp.com/api/v1/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(() => getGames());
    } catch{
      setError(error.message || "Unexpected Error")
    } finally{
      setLoading(false)
    }
  }

  //HANDLE BUTTON
  const handleSubmit = (event) => {
    event.preventDefault();
    createGame();

  }

  const handleInputChanges = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text >Dashboard</Text>
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
