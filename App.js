import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenLogin from "./screens/ScreenLogin";
import TabsNavigator from "./screens/stacks/TabsNavigator";
import { auth } from "./config_firebase";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createStackNavigator();

function MyStack({ user }) {
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen 
          name="TabsNavigator" 
          component={TabsNavigator} 
          options={{
            title: 'BodaPlan',
            headerTitleStyle: { fontWeight: 'bold' },
            headerStyle: { backgroundColor: '#D63384' },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
          }}        
        />
      ) : (
        <Stack.Screen 
          name="ScreenLogin" 
          component={ScreenLogin} 
          options={{
            title: 'Login',
            headerTitleStyle: { fontWeight: 'bold' },
            headerStyle: { backgroundColor: '#D63384' },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
          }}        
        />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MyStack user={user} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});