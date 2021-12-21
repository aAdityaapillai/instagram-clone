import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './src/screens/Register';

import { initializeApp } from 'firebase/app';
import { Login } from './src/screens/Login';


export default function App() {

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC0tZxX4HPbzpRFtPWm865I1TQJyksHHFU",
    authDomain: "instagram-dev-a1d7c.firebaseapp.com",
    projectId: "instagram-dev-a1d7c",
    storageBucket: "instagram-dev-a1d7c.appspot.com",
    messagingSenderId: "545053961032",
    appId: "1:545053961032:web:28b83deece71c65f2fa17d",
    measurementId: "G-1THKN3MMLR"
  };

  initializeApp(firebaseConfig);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

