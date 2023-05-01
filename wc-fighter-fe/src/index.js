// These are the basic imports from react
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/index.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

// These are the basic imports from react-router-dom
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// These are the imports for my custom routes
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contacts';

// These are the imports for my custom programs that have their own route
import Endurance from './routes/endurance';
import TargetChallenge from './routes/targeted';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
      {
        path: "/endurance",
        element: <Endurance />
      },
      {
        path: "/targeted",
        element: <TargetChallenge />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
