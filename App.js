import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import TabsNavigator from './screens/stacks/TabsNavigator';

export default function App() {
  // creacion de la navegacion
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            title: 'Login',
            headerTitleStyle:{
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#D63384', // Un rosa elegante
            },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
          }}
          name="Login" 
          component={Login} 
        />
        <Stack.Screen
          options={{
            title: 'BodaPlan',
            headerTitleStyle:{
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#D63384', // Un rosa elegante
            },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
          }}        
          name="TabsNavigator" 
          component={TabsNavigator} 
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ });