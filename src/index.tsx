import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

import SearchPost from './screens/SearchPost'

const Stack = createStackNavigator();

  
function Routes(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />  
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Nova Conta" component={RegisterScreen} />
      <Stack.Screen name="Recuperar senha" component={ForgotPasswordScreen} />
      <Stack.Screen name="Pesquisa" component={SearchPost} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;

/**import { createAppContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    ForgotPasswordScreen:ForgotPasswordScreen,
    Dashboard: Dashboard,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <Router />;
  }
}*/