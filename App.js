import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Account from './src/screen/Account';
import Shopping from './src/screen/Shopping';
import Favorite from './src/screen/Favorite';
import IconHome from 'react-native-vector-icons/Entypo';
import IconShopping from 'react-native-vector-icons/Entypo';
import IconAccount from 'react-native-vector-icons/MaterialCommunityIcons';
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
          tabBarIcon: ({color}) => (
            <IconHome name="home" size={26} color={color} style={styles.iconTab} />
          ),
          title:""
        }}
        component={Home}/>
        <Tab.Screen
        name="Shopping"
        options={{
          tabBarIcon: ({color}) => (
            <IconShopping name="shopping-cart" size={26} color={color} style={styles.iconTab} />
          ),
          title:""
        }}
        component={Shopping}/>
        <Tab.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({color}) => (
            <IconFavo name="favorite" size={26} color={color} style={styles.iconTab} />
          ),
          title:""
        }}
        component={Favorite}/>
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color }) => (
            <IconAccount name="account" size={26} color={color} style={styles.iconTab} />
          ),
          title:""
        }}
        component={Account} />
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
  iconTab:{
    justifyContent:"center",
    marginTop:10
  }
})
