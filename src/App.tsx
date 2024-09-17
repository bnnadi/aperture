/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from "react-native-bootsplash";
import AppNavigator from './navigation/AppNavigator';
import { SessionProvider } from './contexts/SessionContext';


const navigationTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#3259F1',
		background: '#F5F6FA',
		border: '#ffffff',
		text: '#4a4a4a',
	},
};


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      // setTimeout(async () => {
        // hide the splash screen
        await BootSplash.hide({ fade: true });
        console.log("BootSplash has been hidden successfully");
      // }, 5000);
    });
  }, []);

  return (
    <SessionProvider>
      <NavigationContainer theme={navigationTheme} onStateChange={() => {}}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'transparent'}
            translucent
          />
          <AppNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </SessionProvider>
  );
}

export default App;
