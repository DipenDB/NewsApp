
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import NewsDetailScreen from '../Screens/NewsDetailScreen';
import HeadingDetailScreen from '../Screens/HeadingDetailScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack=createStackNavigator();

const StackNavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}/>

                <Stack.Screen name='Detail' component={NewsDetailScreen}/>
                <Stack.Screen name='HeadingDetail' component={HeadingDetailScreen}/>

                <Stack.Screen name='DetailScreen' component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
