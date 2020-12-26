import React from 'react'
import 'react-native-gesture-handler';
import { stores, StoresProvider } from './src/models/RootModel';
import MainNavigator from './src/navigation/MainNavigator';
import { configure } from "mobx"

configure({
  useProxies: "never"
})
//TODO TESTS AS DROPDOWN MENU
const App: React.FC = () => {
  return (
    <StoresProvider value={stores}>
      <MainNavigator />
    </StoresProvider>

  );
};
export default App;