import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>App.js</Text> */}
      <Home></Home>
    </View>
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
