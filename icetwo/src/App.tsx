import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import Home from './screens/Home';
import Details from './screens/Details';
import Library from './screens/Library';
import Search from './screens/Search';
import History from './screens/History';

export type RootStackParamList = {
  Home: undefined;
  Details: {story: string}
  Library: { library: string}
  Search: {search: string}
  History: {history: string}
};

//---------------------------------------------------------------------------------------------
const Stack = createNativeStackNavigator <RootStackParamList> ()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: "Home page"}}
         />

        <Stack.Screen
          name='Details'
          component={Details}
          options={{title: "Add Book"}}
        />

        <Stack.Screen
          name='Library'
          component={Library}
          options={{title: "Library"}}
        />

        <Stack.Screen
          name='Search'
          component={Search}
          options={{title: "Search"}}
        />

<Stack.Screen
          name='History'
          component={History}
          options={{title: "History"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
