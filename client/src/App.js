import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Search from './pages/Search'

//components
import Footer from './components/Footer'
import Header from './components/Header'

//layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home />},
      { path: '/products/:id', element: <Products />},
      { path: '/product/:id', element: <ProductDetails />},
      { path: '/search', element: <Search />},
    ],
  }
])

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
