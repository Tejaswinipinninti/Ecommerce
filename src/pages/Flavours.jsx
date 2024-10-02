import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Flavours = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS
  }, []);

  return (
    <>
    {/*Flavour for royality starts*/}
    
    <div className="container-fluid"style={{backgroundColor: "black"}}>
    <div className="container p-3">
  <div className="card-body text-center text-white">
    <h5 className="card-title">Flavour Our Royality</h5>
    <img src="src/assets/9.svg"alt=""width="10%"style={{marginTop:"1rem"}}/>
    <h6 className="card-subtitle my-3">We Offer Top Notch</h6>
    <p className="card-text mb-5">Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry lorem Ipsum has been the<br></br> industrys standard dummy text ever.</p>


<div className="row">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
    <div className="card flavour-card" data-aos="fade-right">
  <img src="src/assets/4.jpg" className="card-img-top" alt="..." style={{height:"200px"}}/>
  <div className="card-bbody">
    <h5 className="card-ttitle mb-2">Breakfast</h5>
    <button className="btn btn-outline-success"style={{marginBottom:"2rem"}}>VIEW MENU</button>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
    <div className="card flavour-card mb-4 mt-3" data-aos="zoom-in-up" >
  <img src="src/assets/5.jpg" className="card-img-top" alt="..."style={{height:"250px"}}/>
  <div className="card-bbody">
    <h5 className="card-ttitle mb-2">Appetizers</h5>
    <button className="btn btn-outline-success"style={{marginBottom:"2rem"}}>VIEW MENU</button>
  </div>
</div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
    <div className="card flavour-card "data-aos="fade-left" >
  <img src="src/assets/6.jpg" className="card-img-top" alt="..."style={{height:"200px"}}/>
  <div className="card-bbody">
    <h5 className="card-ttitle mb-2">Drinks</h5>
    <button className="btn btn-outline-success"style={{marginBottom:"2rem"}}>VIEW MENU</button>
  </div>
</div>
    </div>
</div>
</div>
</div>
</div>
    
    {/*Flavour for royality ends*/}
    
      
    </>
  )
}

export default Flavours
