import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Layout from './Layout.jsx';
import Locations from './Locations.jsx';
import Profile from './Profile.jsx';
import Me from './Me.jsx';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",  
          element: <Register />
        },
        {
          path: "login",  
          element: <Login />
        },
        {
           path:"locations",
           element:<Locations />
        },
        {
          path:"profile",
          element:<Profile />
        },{
          path:"me",
          element:<Me />
        }
      ]
    }
  ]);

  return <RouterProvider router={browserRouterObj} />;
}

export default App;

