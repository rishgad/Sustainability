import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigator from './navigation/StackNavigator'; // Importing the StackNavigator to handle routing
const App = () => {
  return (
    <>
      {/* The StackNavigator handles navigation between screens */}
      <StackNavigator />
    </>
  );
};
export default App;