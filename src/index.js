import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './components/App';
import ErrorPage from './components/ErrorPage';
import SinglePhoto from './components/SinglePhoto';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Photos from './components/Photos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Photos />
      },
      {
        path: "photo/:photoId",
        element: <SinglePhoto />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
