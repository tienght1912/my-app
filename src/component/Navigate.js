import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
