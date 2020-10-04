import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import FinanceAPI from '../helpers/FinanceAPI'
import Constants from 'expo-constants'
    
function Item({ title, name }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{title} - {name}</Text>
    </View>
  );
}

export default class SymbolsScreen extends Component {
    constructor() {
        super();

        this.state = {
          data: [],
        }
    }
    async componentDidMount() {
      const finance_api = new FinanceAPI();
      const response = await finance_api.getSymbols();
      this.setState({ data: response });
    }

    
    render() {
        return (
          <View>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item title={item.symbol} name={item.name} />}
              keyExtractor={item => item.symbol}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});