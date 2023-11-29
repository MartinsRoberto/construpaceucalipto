import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Gallery from './pages/Gallery.jsx';
import Tables from './pages/Tables.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Area1Blog from './components/Blog/Area1Blog.jsx';
import AreaPostBlog from './components/Blog/AreaPostBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      }      ,
      {
        path: "/blog/:id",
        element: <Blog />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
