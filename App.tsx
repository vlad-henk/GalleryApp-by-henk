import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryList from './GalleryList';
import PhotoScreen from './PhotoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryList} options={{ title: 'henk' }} />
        <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'Photo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
