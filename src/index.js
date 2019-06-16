import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Map from "./components/Map"
import Home from "./components/Home"
import Chat from "./components/Chat"
import Perfil from "./components/Perfil"
import Friends from "./components/Friends"






const MenuConfig = {
    initialRouteName: 'Home', 
    tabBarOptions: {
        showLabel: false,
    }
  }
  
  const TabNavigator = createBottomTabNavigator({

    Home: {
      name: 'Home',
      screen: Home,
      navigationOptions: {
          title: 'Home',
          tabBarIcon: ({tintColor}) => 
              <Icon name= 'home' size= {30}  />
      }
  }, 
  
  Events: {
      name: 'Events',
      screen: Friends,
      navigationOptions: {
          title: 'Chat',
          tabBarIcon: ({tintColor}) => 
              <Icon name= 'users' size = {30} color= {tintColor} />
      }
  },
  
  
  Search :{ 
      name: 'Search',
      screen: Map,
      navigationOptions: {
          title: 'InfoPerson',
          tabBarIcon: ({tintColor}) => 
              <Icon name= 'search' size = {30} color= {tintColor} />
      },
  },
  
  Chat: {
  
      name: 'Chat',
      screen: Chat,
      navigationOptions: {
          title: 'Events',
          tabBarIcon: ({tintColor}) => 
              <Icon name= 'comments' size  = {30} color= {tintColor} />
      }
  
  },
  
  Perfil: {
      name: 'Perfil',
      screen: Perfil,
      navigationOptions: {
          title: 'Perfil',
          tabBarIcon: ({tintColor}) => 
              <Icon name= 'user' size= {30} color= {tintColor} />
      }
  
  }
  },MenuConfig);

const App = createAppContainer(TabNavigator,);

export default App;
