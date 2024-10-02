import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import PrivateRoute from './components/PrivateRoute'
import ResetPassword from './pages/ResetPassword'




const App = () => {
  
  
  const navlocation=useLocation()
  console.log(navlocation)

  let navPath=["/login","register","/reset"]

  let hideNavbar=navPath.includes(navlocation.pathname)
  console.log(hideNavbar)

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Handle the search query here
  };

  return (
    <>
    
    {!hideNavbar&& <Navbar onSearch={handleSearch}/>}
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/shop'element={<Shop />}/>
      
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/cart'element={
        <PrivateRoute>
          <Cart/>
        </PrivateRoute>
      }/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/reset'element={<ResetPassword/>}/>
      </Routes>
      

      
    </>
  )
}

export default App
