import React, { useState } from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/AppNavigator'

const getFonts = () => Font.loadAsync({
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppNavigator />
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}


