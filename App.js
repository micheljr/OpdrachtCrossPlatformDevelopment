import React from 'react';
import { getData } from './src/utils/OneApi';
import RootNavigation from './src/config/AppNavigation';

export default function App() {
  const result = getData('movie');
  console.log(result);

  return <RootNavigation />;
}
