import React from 'react';



const Story = () => {
  return (
    <>
      {/* Our Story starts */}
      <div className="container-fluid"style={{ backgroundColor: "#3C3D37"}}>
        <div className="container">
      <div className="row" style={{color: "white" }}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="carrd-body text-center">
            <h5 className="card-title py-3">Our Story</h5>
            <img src="src/assets/9.svg" alt="Icon" width="10%" />
            <h3 className="card-subtitle my-3">Every Flavor Tells a Story</h3>
            <p className="card-text my-3">
              Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry lorem Ipsum
              has been the industry's standard dummy text ever since<br /> an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.
            </p>
            <h5 className="card-title my-3">Book Through Call</h5>
            <h5 className="card-title my-3">+80(400)1234567</h5>
            <button className="btn btn-outline-success my-3">READ MORE</button>
          </div>
        </div>

        {/* Image section starts */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5 image">
          <div className="image-wrapper">
            <img src="src/assets/7.jpg" alt="Restaurant" className="main-image" />
            <img src="src/assets/8.jpg" alt="Chef" className="overlay-image" />
          </div>
        </div>
        {/* Image section ends */}
      </div>
      </div>
      </div>
    </>
  );
}

export default Story;
