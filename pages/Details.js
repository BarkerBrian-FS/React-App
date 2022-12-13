import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Heading from '../components/Heading';
import ListContainer from '../components/ListContainer';

export default function Details() {
  
      const [games, setGames] = useState(null)
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)
      const [values, setValues] = useState({
        name: '',
        genre: '',
        company: ''
      })

      const {id} = useParams();
      const navigate = useNavigate();

      //GET GAME
    const getGames = async () => {
      setLoading(true)
      try{
        await fetch(`https://crud-api-dwa-463.herokuapp.com/api/v1/games${id}`)
                    .then(res => res.json())
                    .then(data => {
                      setValues({
                        name: data.name, 
                        genre: data.genre, 
                        company: data.company 
                      })
                    })
      } catch{
        setError(error.message || "Unexpected Error")
      } finally{
        setLoading(false)
      }
    }

    //DELETE GAME
    const deleteGame = async () => {
      try{
        await fetch(`https://crud-api-dwa-463.herokuapp.com/api/v1/games/${id}`, {
          method: 'DELETE'
        })
                    .then(res => res.json())
                    .then(data => {
                      setGames(data)
                      navigate('/dashboard', { replace: true })
                    })
      } catch{
        setError(error.message || "Unexpected Error")
      } finally{
        setLoading(false)
      }
    }

    //CREATE GAME
    const updateGame = async () => {
      try{
        await fetch(`https://crud-api-dwa-463.herokuapp.com/api/v1/games/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
                    .then(res => res.json())
                    .then(data => {
                      setGames({data})
                    })
      } catch{
        setError(error.message || "Unexpected Error")
      } finally{
        setLoading(false)
      }
    }

    //HANDLE BUTTON
    const handleSubmit = (event) => {
      event.preventDefault();
      updateGame();

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
      <Text >Details</Text>
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
