import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fontisto } from '@expo/vector-icons';

// Use of plugin material-top-tabs
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TopParamList, TabOneParamList, TabTwoParamList } from '../types';

const TopTab = createMaterialTopTabNavigator<TopParamList>();

export default function BottomTabNavigator() {
  // Custom hook
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 5,
        },
        labelStyle: {
          fontWeight: "bold"
        },
        showIcon: true,
         }}>
      <TopTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarLabel: () => null
        }}
      />
      <TopTab.Screen
        name="Chat"
        component={ChatScreen}
      />
      <TopTab.Screen
        name="Call"
        component={TabTwoNavigator}
      />
      <TopTab.Screen
        name="Status"
        component={TabTwoNavigator}
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
