import React from 'react';



const Maps = () => {
  return (
    <>
      <div className="container-fluid">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30442.123975016217!2d78.39416320000001!3d17.494835199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727024402639!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
      <div className="row"style={{backgroundColor:"black",color:"white"}}>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center p-3">
            <h3>Lunch Time</h3>
            <p>Monday to Sunday</p>
            <p>11.00am-2.30pm</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center p-3">
            <h3>Contact Info</h3>
            <p>Restaurant St, Delici City, London 9578, UK</p>
            <p>Email : booking@domainname.com</p>
            <p>Booking : +88-123-123456</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center p-3">
            <h3>Dinner Time</h3>
            <p>Monday to Sunday</p>
            <p>5.30 pm - 11.30 pm</p>
        </div>

      </div>
      <div className="row"style={{backgroundColor:"black",color:"white"}}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
            <h3>Message Us</h3>
            <p>Have a question about the our service? We're here to</p>
            <p>help, contact us today</p>
            <form>
           <div><input type="text" placeholder="Your Name" required style={{marginBottom:"15px"}}/></div> 
           <div><input type="email" placeholder="Your Email" required style={{marginBottom:"15px"}}/></div>
           <div><input type="number" placeholder="Phone Number"style={{marginBottom:"15px"}}/></div>
           <div><textarea placeholder="Special Request"/></div>
            <div className="bt">
                <button className="btn btn-outline-success mb-5">Send Your Message</button>  

                </div>
                
            </form>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <img src="src/assets/7.jpg" alt=""width="100%"height="500px"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Maps;
