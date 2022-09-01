import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Posts } from "../screens/Posts";
import { AddPosts } from "../screens/AddPosts";

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
 export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPosts"
          component={AddPosts}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};