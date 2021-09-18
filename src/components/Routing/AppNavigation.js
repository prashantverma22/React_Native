import 'react-native-gesture-handler';
import * as React from 'react';

import Login from '../AuthScreens/Login';
import Signup from '../AuthScreens/Signup';
import Home from '../Home/Home';
import UserList from '../Users/UserList';
import UserDetail from '../Users/UserDetail';
import Profile from '../Users/Profile';
import Password from '../Users/Password';
import Responsive from '../Other/Responsive';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Sign = createStackNavigator();


const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Users" component={UserList} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Change Password" component={Password} />
    </Drawer.Navigator>
  );
}

//Seperate stack for Sign up screen.
const SignUp = () => {
  return (
    <Sign.Navigator screenOptions={{ headerShown: false }}>
      <Sign.Screen name="Signup" component={Signup} />
    </Sign.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Responsive" component={Responsive} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="User Detail" component={UserDetail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

