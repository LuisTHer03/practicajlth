import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"

import ProyectorStackScreen from "./ProyectorStackScreen";
import OtrosStackScreen from "./OtrosStackScreen";
import PerfilStackScreen from "./PerfilStackScreen";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
    return (
        <Tab.Navigator>
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
                name = "Perfil"
                component = {PerfilStackScreen}
                options = {{headerShown: false}}
            />
        </Tab.Navigator>
    );
};
export default TabsNavigator;