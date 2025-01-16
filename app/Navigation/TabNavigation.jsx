import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import LoginScreen from '../Screens/LoginScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialIcons2 from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,
        tabBarActiveTintColor:'#3C0064'
    }}>
        <Tab.Screen name ='Home' component = {HomeScreen}
        options={{tabBarLabel: ({color}) => (
            <Text style = {{color:color,fontSize:12,marginBottom:3}}>Home</Text>
        ),
        tabBarIcon:({color,size}) => (
            <Entypo name="home" size={size} color={color}/>

        )
    }}
        />
        <Tab.Screen name ='Explore' component = {ExploreScreen}
        options={{tabBarLabel: ({color}) => (
            <Text style = {{color:color,fontSize:12,marginBottom:3}}>Explore</Text>
        ),
        tabBarIcon:({color,size}) => (
            <MaterialIcons name="explore" size={size} color={color} />

        )
    }}/>
        <Tab.Screen name ='Addpost' component = {AddPostScreen}
        options={{tabBarLabel: ({color}) => (
            <Text style = {{color:color,fontSize:12,marginBottom:3}}>Add Post</Text>
        ),
        tabBarIcon:({color,size}) => (
            <MaterialIcons2 name="add-box" size={size} color={color} />

        )
    }}/>
        <Tab.Screen name ='Your Profile' component = {ProfileScreen}
        options={{tabBarLabel: ({color}) => (
            <Text style = {{color:color,fontSize:12,marginBottom:3}}>Profile</Text>
        ),
        tabBarIcon:({color,size}) => (
            <AntDesign name="user" size={size} color={color} />
        )
    }}/>
    </Tab.Navigator>
  )
}