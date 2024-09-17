import React from 'react';

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { SessionContext } from '../contexts/SessionContext';

import TabNavigator from './TabNavigator';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';
import SignUpScreen from '../screens/SignupScreen';
import { AuthStackParamList, TabStackParamList } from 'utils/types';

type AppStackParamList = AuthStackParamList & TabStackParamList;
// Create a type for your specific screen's navigation
type AppNavigationProp = StackNavigationProp<AppStackParamList, 'Login'>;

const AuthStack = createStackNavigator();

// Define the Auth Stack
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen key={'Login'} name="Login" component={LoginScreen} options={{ headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            },}} />
    <AuthStack.Screen key={'SignUp'} name="SignUp" component={SignUpScreen} options={{ headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            }, }} />
    <AuthStack.Screen key={'ForgotPassword'} name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            }, }} />
    <AuthStack.Screen key={'PasswordReset'} name="PasswordReset" component={PasswordResetScreen} options={{ headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            }, }} />
  </AuthStack.Navigator>
);

export default function AppNavigator() {
  // Access isAuthenticated from context
  const session = React.useContext(SessionContext);
  const navigation = useNavigation<AppNavigationProp>();

  // If context is undefined, throw an error
  if (!session) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  React.useEffect(() => {
    if (!session.isAuthenticated) {
      navigation.navigate('Login');
    }
  }, [session]);

  // Define the Tab Navigator
  if (session.isAuthenticated) {
    return (
      <TabNavigator />
    )
  }
  return (
    <AuthStackScreen />
  );
}

