import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../container/home/Home';
import UpdateProfile from '../../container/UpdateProfile/UpdateProfile';
import Story from '../../container/story/Story';

const Navigation = () => {
    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
          <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{headerShown: false,title: 'Home' }} />
      <Tab.Screen name="Update Profile" component={UpdateProfile} options={{headerShown: false,  title: 'Update Profile'}}/>
      <Tab.Screen name="Story" component={Story} options={{headerShown: false, title: 'Story'}} />
    </Tab.Navigator>

    </NavigationContainer>
  )
}

export default Navigation