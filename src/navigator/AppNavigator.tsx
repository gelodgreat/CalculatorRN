import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from 'screens/Home/Home.container';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
