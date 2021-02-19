import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from './src/screens/Home';
import SobreScreen from './src/screens/Sobre';
import CadastroScreen from './src/screens/Cadastro';
import LoginScreen from './src/screens/Login';
import ContatoScreen from './src/screens/Contato';
import Moodle from './src/screens/Moodle';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: '#F30F4C' }}
      >

        <Tab.Screen
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
        />

        <Tab.Screen 
        name="Sobre" 
        component={SobreScreen} 
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color }) => (
            <Entypo name="info-with-circle" color={color} size={24} />
          ),
        }}
        />

        <Tab.Screen 
        name="Cadastro" 
        component={CadastroScreen} 
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={24} />
          ),
        }}
        />

        <Tab.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login-variant" color={color} size={24} />
          ),
        }}        
        />

        <Tab.Screen 
        name="Contato" 
        component={ContatoScreen}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({ color }) => (
            <Fontisto name="email" color={color} size={24} />
          ),
        }}
        />

        <Tab.Screen 
        name="Moodle" 
        component={Moodle}
        options={{
          tabBarLabel: 'Moodle',
          tabBarIcon: ({ color }) => (
            <Foundation name="social-game-center" color={color} size={24} />
          ),
        }}
        />

      </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;