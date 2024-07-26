// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import FitnessAppPage from './FitnessAppPage';
import OtherPage from './OtherPage';
import TwoButton from './components/TwoButton';
import Home from './Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FitnessApp">
        <Stack.Screen
          name="FitnessApp"
          component={FitnessAppPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtherPage"
          component={OtherPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TwoButton"
          component={TwoButton}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
