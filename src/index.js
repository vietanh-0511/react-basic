import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoList from './pages/ToDo/ToDoList';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Counter from './pages/Counter/Counter';
import { Provider } from 'react-redux'
import store from './store/store';
import Users from './pages/Users/Users';
import UserDetail from './pages/Users/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} exact>
            <Route index element={<Home />} />
            <Route path="to-do-list" element={<ToDoList />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />}/>
            <Route path="users" element={<Users />} exact />
            <Route path="users/:id" element={<UserDetail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
