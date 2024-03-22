import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/home';
import Header from './Components/Navbar';
import SignIn from './Components/signIn';
import LogIn from './Components/login';
import Cart from './Components/products/cart';
import Orders from './Components/Orders';

// App component responsible for routing and rendering different pages
export default function App() {
  // Create a browser router with specified routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'login', element: <LogIn /> },
        { path: 'cart', element: <Cart /> },
        { path: 'myOrders', element: <Orders /> }
      ]
    }
  ]);

  return (
    <>
      {/* Provide the router to the RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}
