import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import Start from "../screens/Start";
import Login from "../screens/Login";
import Register_1 from "../screens/Register_1";
import Register_2 from "../screens/Register_2";
import Register_3 from "../screens/Register_3";
import Register_4 from "../screens/Register_4";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name='Start' options={{headerShown: false}} component={Start} />
                <Stack.Screen name='Login' options={{headerShown: false}} component={Login} />
                <Stack.Screen name='Register1' options={{headerShown: false}} component={Register_1} />
                <Stack.Screen name='Register2' options={{headerShown: false}} component={Register_2} />
                <Stack.Screen name='Register3' options={{headerShown: false}} component={Register_3} />
                <Stack.Screen name='Register4' options={{headerShown: false}} component={Register_4} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}