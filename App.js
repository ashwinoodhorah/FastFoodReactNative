import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginSignupScreen from './app/screens/LoginSignupScreen';

export default function App() {
  return (
    <LoginSignupScreen />
  );
}
