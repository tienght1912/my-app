import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Settings from './src/screen/Settings';
import Shopping from './src/screen/Shopping';
import Favorite from './src/screen/Favorite';
import {
IconHome,
IconShopping
}
  from 'react-native-vector-icons/Entypo';
import IconSettings from 'react-native-vector-icons/Ionicons';
import IconFavo from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fc5c65",
        inactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon:({colorHome}) => (
            <IconHome name="home" size={30} color={colorHome} />
          )
        }}
        component={Home}/>
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ colorSettings }) => (
            <IconSettings name="settings" size={30} color={colorSettings} />
          )
        }}
        component={Settings} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff9fb",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#130f40"
  },
})
