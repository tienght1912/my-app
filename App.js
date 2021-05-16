import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screen/Home';
import Settings from './src/screen/Settings';
import Login from './src/screen/Login';
export default function App() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#dff9fb",
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    fontSize:24,
    fontWeight:"700",
    color:"#130f40"
  }
})
