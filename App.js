import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SymbolsScreen from './app/screens/SymbolsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function App() {
  /* jshint ignore:start */

  // createHomeStack = () => {
  //   <Stack.Navigator>
  //     <Stack.Screen name="Stocks" component={SymbolsScreen}/>
  //     <Stack.Screen name="Login" component={WelcomeScreen}/>
  //   </Stack.Navigator>
  // }

  // createTopTabs = () => {
  //   return (
  //     <MaterialTopTabs.Navigator>
  //       <MaterialTopTabs.Screen name="NASDAQ" component={SymbolsScreen}/>
  //       <MaterialTopTabs.Screen name="NASDAQ" component={SymbolsScreen}/>
  //     </MaterialTopTabs.Navigator>
  //   )
  // }

  // createBottomTabs = () => {
  //   return(
  //     <MaterialBottomTabs.Navigator>
  //       <MaterialBottomTabs.Screen name="Today" component={SymbolsScreen}/>
  //       <MaterialBottomTabs.Screen name="Week" component={SymbolsScreen}/>
  //       <MaterialBottomTabs.Screen name="Month" component={SymbolsScreen}/>
  //     </MaterialBottomTabs.Navigator>
  //   )
  // }
  return (
    <NavigationContainer>
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Login" component={WelcomeScreen} />
        <MaterialTopTabs.Screen name="Stocks" component={SymbolsScreen} />
      </MaterialTopTabs.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Stocks" component={SymbolsScreen}/>
    //     <Stack.Screen name="Login" component={WelcomeScreen}/>
    //     <Stack.Screen name="NASDAQ" component={SymbolsScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
  /* jshint ignore:end */
}