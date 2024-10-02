import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart'
import { DarkModeContext } from '../store/DarkModeContext'



const Navbar = () => {
    const [collapsed,setCollapsed]=useState(false)
    console.log(collapsed)
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


    //
    let showToggle=()=>{
      setCollapsed(!collapsed)
    }
    //cart icon value
    const{IconTotal}=useCart()
    
    const {isLoggedIn,isUserlogged,isloading,signOut}=useAuth()

    const handleSignOut=async()=>{
      try{
        let success=await signOut()
        if(success){
          console.log("user logged out")
        }else{
          console.log("failed to log")
        }

      }catch(error){
        console.log(error)

      }
    }

    if(isloading){
      return null
    }

    
  return (
   <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-success fs-5 fw-bold">Ecomm</NavLink>
    <button className="navbar-toggler" type="button" onClick={showToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${!!collapsed && "show"}`} id="navbarSupportedContent">
    
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link "to={'/shop'}>Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to={'/contact'}>Contact</NavLink>
        </li>
      </ul>

      {/*Logins start*/}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        {/*cart starts*/}
        <li className="nav-item px-1">
          <NavLink className="btn btn-outline-primary "to={'/cart'}><i className="bi bi-bag"></i>
          {IconTotal!==0?IconTotal:null}
          </NavLink>
        </li>
        {/*cart ends*/}
      {isLoggedIn?(
        <li className="nav-item px-1">
        <button className="btn btn-outline-success" onClick={()=>handleSignOut()}>LogOut</button>
      </li>
      ):(
        <li className="nav-item px-1">
          <NavLink className="btn btn-outline-danger "to={'/login'}>SignIn</NavLink>
        </li>
      )}
      <li className="nav-item px-1">
              <button className="btn btn-secondary" onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <i className="bi bi-sun"></i>  // Icon for light mode
                ) : (
                  <i className="bi bi-moon"></i> // Icon for dark mode
                )}
              </button>
              </li>
      </ul>
      {/*Logins ends*/}
    </div>
  </div>
</nav>

   </>
  )
}

export default Navbar
