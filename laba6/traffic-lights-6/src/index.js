import React from 'react';
import ReactDOM from 'react-dom/client.js';
import './index.css';
import App from './App.js';
import RootPage from './Pages/RootPage/RootPage.jsx';
import Home from './Pages/Home/Home.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import reportWebVitals from './reportWebVitals.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TrafficLights from './components/TrafficLight/TrafficLight.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/traffic-light/:direction',
        element: <TrafficLights />,
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
