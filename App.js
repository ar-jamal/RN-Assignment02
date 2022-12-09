import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/home';
import ItemDetails from './src/Config/Screens/itemDetails';
import MaleCategory from './src/Config/Screens/maleCategory';
import FemaleCategory from './src/Config/Screens/femaleCategory';
import globalStyles from './src/Utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaleShoes from './src/Config/Screens/maleShoes';
import MaleCasual from './src/Config/Screens/maleCasual';
import MaleWinter from './src/Config/Screens/maleWinter';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Stack = createNativeStackNavigator();
const MBottomTab = createMaterialBottomTabNavigator();
const drawerTab = createDrawerNavigator();

const MenCategory= () => {
  return(
    <drawerTab.Navigator>
      <drawerTab.Screen name= "Men Winter Collection" component={MaleWinter}/>
      <drawerTab.Screen name= "Men Shoes" component={MaleShoes}/>
      <drawerTab.Screen name= "Men casual" component={MaleCasual}/>
    </drawerTab.Navigator>
  )
}

const MainScreen = () => {
  return (
    <MBottomTab.Navigator
      barStyle={globalStyles.mBottomTabStyle}
    >
      <MBottomTab.Screen
        independent={true}
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <Icon name="roofing" color="white" size={8} />
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
