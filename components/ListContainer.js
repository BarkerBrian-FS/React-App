import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';

export default function ListContainer({data}) {

  const renderItem = ({ item }) => (
    <ListItem>{item}</ListItem> 
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
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
