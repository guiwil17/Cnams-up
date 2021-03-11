import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { useTheme } from '@material-ui/core/styles';


const App: React.FC = () =>  {
  return (
    <div className="App" style={{ height: '100%' }}>     
    <Content />      
</div>

  );
}

export default App;
