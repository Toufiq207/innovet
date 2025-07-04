
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Lizon from './pages/Lizon';
import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import Blog from './pages/Blog';
import Price from './pages/Price'
import Portfolio from './pages/Portfolio'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<Home />}></Route>
    <Route
      path="/about"
      element={<About />}></Route>
    <Route
      path="/lizon"
      element={<Lizon />}></Route>
    <Route
      path="/blog"
      element={<Blog />}></Route>
    <Route
      path="/price"
      element={<Price />}></Route>
    <Route
      path="/portfolio"
      element={<Portfolio />}></Route>
    </>
  )
);



const App = () => {
  return (
    
    <RouterProvider router={router} />
  )
}

export default App