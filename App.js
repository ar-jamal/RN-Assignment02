import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import ItemDetails from './src/Config/Screens/itemDetails';
import MaleCategory from './src/Config/Screens/maleCategory';
import FemaleCategory from './src/Config/Screens/femaleCategory';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import globalStyles from './src/Utils/globalStyles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Stack = createNativeStackNavigator();
const MBottomTab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <MBottomTab.Navigator
      barStyle={globalStyles.mBottomTabStyle}
    >
      <MBottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <MaterialIcons name="roofing" color="white" size={8} />
          }
        }}
      />
      <MBottomTab.Screen name="Men's Collection" component={MaleCategory} />
      <MBottomTab.Screen name="Women's Collection" component={FemaleCategory} />
    </MBottomTab.Navigator>
  )
}

export default function AppRouter() {

  return (
    <NavigationContainer independent="true for nested routing">
      <Stack.Navigator>

        <Stack.Screen name="Main Screen" component={MainScreen}
          options={{ headerShown: false }}
        />

        {/* </Stack.Screen> */}
        <Stack.Screen name="Item Details" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
