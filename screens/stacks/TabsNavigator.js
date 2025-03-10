import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"; // Para crear las 3 pestañas entre los stacks
import ProyectorStackScreen from "./ProyectorStackScreen";
import OtrosStackScreen from "./OtrosStackScreen";
import CerrarSesionScreen from "../CerrarSesionScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === "Proyector") {
                        iconName = focused? "image" : "image-outline";
                    }else if (route.name === "Otros") {
                        iconName = focused? "book" : "book-outline";
                    }else if (route.name === "Cerrar Sesion") {
                        iconName = focused? "log-out" : "log-out-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name = "Proyector"
                component = {ProyectorStackScreen}
                options = {{headerShown: false}}
            />
            <Tab.Screen
                name = "Otros"
                component = {OtrosStackScreen}
                options = {{headerShown: false}}
            />
            <Tab.Screen
                name = "Cerrar Sesion"
                component = {CerrarSesionScreen}
                options = {{headerShown: false}}
            />
        </Tab.Navigator>
    );
};
export default TabsNavigator;