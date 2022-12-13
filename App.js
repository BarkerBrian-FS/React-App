import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading';
import ListContainer from './components/ListContainer';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator;
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name='Home' component={Home} options={{title: 'Game Shelf'}} />
        <Stack.screen name='Dashboard' component={Dashboard} />
        <Stack.screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
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
