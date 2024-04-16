import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ex1 from './assets/ex1.png'
import ex2 from './assets/ex2.png'
import ex3 from './assets/ex3.png'
import ex4 from './assets/ex4.png'
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-12">
          <img src={ex4} alt="Image 1" className="img-res[" />
        </div>
        
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h2>Heading 1</h2>
          <img src={ex1} alt="Image 3" className="img-fluid" />
          <p>Content goes here...</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <img src={ex3} alt="Image 1" className="img-fluid" />
        </div>
        <div className="col-xs-6 col-md-3">
          <img src={ex4} alt="Image 2" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default App;
