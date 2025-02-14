import{useState} from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  //using the CreateUser functionality from store
  const{createUser}=useAuth()
  const navigate=useNavigate()

  //handling the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await createUser({email,password})
      navigate("/login")

    }catch(error){
      toast.error("user not registered")

    }
  }


  return (
    <>
    <div className="container p-5">
      <div className="row border border-primary p-3 shadow">
        
        {/*col-1 ends*/}
        {/*col-2 starts*/}
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          <img src="/src/assets/1.png"alt=""className="imf-fluid img-thumbnail"/>
        </div>
        <div className="col-sm-12 col-12 col-md-6 col-lg-6">
          {/*frm content*/}
          <form className="row" onSubmit={handleSubmit}>
            <h3 className="fw-bold fs-4 text-success">Register</h3>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim cum doloribus quasi autem aut placeat expedita explicabo sed cupiditate voluptates fuga veritatis nemo, impedit numquam corporis vero maiores tempore.</p>
          <div className="mb-5">
  <label htmlFor="email" className="form-label fw-bold fs-4">Register</label>
  <input 
  type="email" 
  className="form-control" 
  id="email" 
  placeholder="Enter your email"
  required
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  
  />
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label fw-bold fs-4">Password</label>
  <input 
  type="password" 
  className="form-control" 
  id="password" 
  placeholder="Enter your password" 
  required
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  
  />
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="submit">Register</button>

</div>
          </form>
          

          
        </div>
        </div>
      </div>
    
      
    </>
  )
}

export default Register
