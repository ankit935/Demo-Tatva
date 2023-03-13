import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp} from '../screens';
const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const renderAuthStack = () => {
    return (
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {renderAuthStack()}
    </Stack.Navigator>
  );
};
