
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen.js';
import welcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#015634' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Subscribe" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={welcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}