import React from 'react'

const News = () => {
  return (
    <>
    <div className="container-fluid "style={{backgroundColor:"black",color:"white"}}>
        <div className="container">
            <div className="row p-4">
                <div className="col-12 col-sm-12 col md-4 col-lg-4 text-center">
                    <p>HOME</p>
                    <p>MENUS</p>
                    <p>ABOUT US</p>
                    <p>OUR CHEFS</p>
                    <p>CONTACT</p>
                </div>
                <div className="col-12 col-sm-12 col md-4 col-lg-4 text-center">
                    <h3>DELCI</h3>
                    <h3>RESTAURANT</h3>
                    <p>Restaurant St, Delicious City, London 9578, UK</p>
                    <p>booking@domainname.com</p>
                    <p>Booking Request : +88-123-123456</p>
                    <p>Open : 09:00 am - 01:00 pm</p>
                    <p>Get News & Offers</p>
                    <p>Subscribe us & Get 25% Off.</p>
                    <div className="input-group">
               
               <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Your Email"/>
               <div className="input-group-text"><button className="btn btn-lg py-2 btn-warning">Subscribe</button></div>
             </div>
             </div>
  
                

                <div className="col-12 col-sm-12 col md-4 col-lg-4 text-center mt-3">
                  <p>FACEBOOK</p>
                  <p>INSTAGRAM</p>
                  <p>TWITTER</p>
                  <p>YOUTUBE</p>
                  <p>GOOGLE MAPS</p>
                    
                </div>
                </div>
                <p className="text-center">© 2022 Restaurt. All Rights Reserved | Crafted by Kalanidhi Themes</p>
            </div>
            </div>
            
        
    
      
    </>
  )
}

export default News
