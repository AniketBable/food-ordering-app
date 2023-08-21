import './App.css';

import { AuthContextProvider } from './store/AuthContext';
import Nav from './components/Header/Nav';
import MainContainer from './components/MainContent/MainContainer';
import { useState } from 'react';
function App() {
  const[dashboardView, setDashboardView] = useState('');
 
  return (
    <AuthContextProvider>
      <Nav setView={setDashboardView} />
      <MainContainer viewName = {dashboardView}/>
    </AuthContextProvider>
  );
}

export default App;
