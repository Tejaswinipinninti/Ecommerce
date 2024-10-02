import {useState} from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const ResetPassword = () => {
    //state to hold the email given by user
    const [email,setEmail]=useState('')
    const {resetPassword}=useAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await resetPassword(email)
            navigate('/login')
        }catch(error){
            toast.error("email is not verified")
        
        }
      }
  return (
    <div className="container p-5">
    <div className="row border border-primary p-3 shadow">
      
      {/*col-1 ends*/}
      {/*col-2 starts*/}
      <div className="col-sm-12 col-12 col-md-6 col-lg-6">
        <img src="/src/assets/1.png"alt=""className="imf-fluid img-thumbnail"/>
      </div>
      <div className="col-sm-12 col-12 col-md-6 col-lg-6">
        {/*frm content*/}
        <form className="row"onSubmit={handleSubmit}>
          <h3 className="fw-bold fs-4 text-success">RESETPASSWORD</h3>
          <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim cum doloribus quasi autem aut placeat expedita explicabo sed cupiditate voluptates fuga veritatis nemo, impedit numquam corporis vero maiores tempore.</p>
        <div className="mb-5">
<label htmlFor="email" className="form-label fw-bold fs-4">Email</label>
<input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
onChange={(e)=>setEmail(e.target.value)}
required/>
</div>

<div className="d-grid gap-2 col-6 mx-auto">
<button className="btn btn-primary" type="submit">SendEmail</button>


</div>
        </form>
        

        
      </div>
      </div>
    </div>
  )
}

export default ResetPassword
