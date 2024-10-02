import React from 'react';


const Menu = () => {
  return (
    <>
      <div className="container-fluid"style={{backgroundColor:"black"}}>
        <div className="container">
      
        <div className="text-center text-white">
    <h5 className="py-3">SPECIAL SELECTION</h5>
    <img src="src/assets/9.svg" alt="Logo" width="10%" />
    <h3 className="my-3">Delicious Menu</h3>
  </div>

  {/* Tabs Section */}
  <div className="menu-tabs d-flex flex-wrap justify-content-center align-items-center my-4">
    <p className="mb-0 mx-3">MORNING</p>
    <i className="bi bi-suit-diamond mx-2"></i>
    <p className="mb-0 mx-3">WEEKDAY LUNCH</p>
    <i className="bi bi-suit-diamond mx-2"></i>
    <p className="mb-0 mx-3">DINNER</p>
    <i className="bi bi-suit-diamond mx-2"></i>
    <p className="mb-0 mx-3">WINES</p>
  </div>
    
      
      <div className="row mt-5">
        {/* Left Column */}
        <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Green Salad</h5>
                <h5 className="menu-price">$25.00</h5>
              </div>
              <p className="menu-description">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
            </div>
          </div>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Tokusen Wagu<span className="badge bg-warning">New</span></h5>
                <h5 className="menu-price">$39.00</h5>
              </div>
              <p className="menu-description">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
            </div>
          </div>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Lasagne<span className="badge bg-warning">Seasonal</span></h5>
                <h5 className="menu-price">$40.00</h5>
              </div>
              <p className="menu-description">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
            </div>
          </div>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Olivas Rellenas</h5>
                <h5 className="menu-price">$25.00</h5>
              </div>
              <p className="menu-description">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
            </div>
          </div>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Butternut Pumpkin</h5>
                <h5 className="menu-price">$10.00</h5>
              </div>
              <p className="menu-description">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.</p>
            </div>
          </div>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-md-6">
          {/* Lasagne */}
          <div className="d-flex justify-content-between align-items-center menu-item mb-4">
            <img src="src/assets/12.png" alt="Lasagne" className="menu-image" />
            <div className="menu-content ms-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="menu-price">Opu Fish</h5>
                <h5 className="menu-price ">$49.00</h5>
              </div>
              <p className="menu-description">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
            </div>
          </div>
          
          </div>
         
        
          </div>
          
          <div className="text-center">
          <p className="menu-price">During winter daily from 7:00 pm to 9:00 pm</p>
          <a href="#"className="btn btn-outline-success my-4">VIEW ALL MENU</a>
          </div>


</div>
    

      </div>
      
    </>
  );
};

export default Menu;
