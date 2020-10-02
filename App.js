import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from './assets/data/nasdaq.json';

export default function App() {
  /* jshint ignore:start */

  const [nasdaqData, setNasdaqData] = useState([])


  function fetchNasdaqData() {
    setNasdaqData(data);
  }

  useEffect(()=> {
    fetchNasdaqData();
  })
  return (
      <FlatList 
      data={nasdaqData}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.Symbol}
  renderItem={({item}) => <Text style={styles.text}>{item.Symbol} - {item["Company Name"]}</Text>}
      />
    );
/* jshint ignore:end */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
