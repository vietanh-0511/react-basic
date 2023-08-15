import './App.css';
import {  Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function App() {
  return (
    <>
      <div className="Header">
        <ResponsiveAppBar />
      </div>
      <div className='Body'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
