import React from 'react';
import { MovieDetail, Levels,Points } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />

        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
        />
           <Stack.Screen
          name="Level"
          component={Levels}
        />
           <Stack.Screen
          name="Points"
          component={Points}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;