import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDo/ToDoList';
import { Switch, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ToDoList /> */}
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
