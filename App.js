import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/config/AppNavigation';

export default function App() {
  //const result = getData('movie');
  //console.log(result);

  return (
    <SafeAreaProvider>
      {/* //<SafeAreaView> */}
      <RootNavigation />
      {/* //</SafeAreaView> */}
    </SafeAreaProvider>
  );
}
