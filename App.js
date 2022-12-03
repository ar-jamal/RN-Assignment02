import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/home";
import ItemDetails from "./src/Config/Screens/itemDetails";


const Stack = createNativeStackNavigator();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ItemDetails" component={ItemDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}








