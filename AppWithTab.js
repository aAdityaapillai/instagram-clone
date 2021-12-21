import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Search } from './src/screens/Search';
import { Profile } from './src/screens/Profile';

export default function AppWithTab() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color="red" size={24} />
          ),
        }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color="red" size={24} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color="red" size={24} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

