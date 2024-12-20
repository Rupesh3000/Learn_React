import React from 'react'


import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Reactrouter/Home/Home.jsx'
import About from './Reactrouter/About/About.jsx'
import Contact from './Reactrouter/Contact/Contact.jsx'
import User from './Reactrouter/User/User.jsx'



function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path: "about",
  //         element: <About />
  //       },
  //       {
  //         path: 'contact',
  //         element: <Contact />
  //       }


  //     ]
  //   }
  // ])



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        {/* <Route path='user/:userId' element={<User />} /> */}
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
