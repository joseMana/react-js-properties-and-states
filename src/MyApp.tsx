import React from "react";
import "./App.css";
import image from "./assets/images/amazing_toy.jpg";
import logo from "./assets/images/logo.png";
import ReviewPost from "./components/ReviewPost";
import ReviewPostFC from "./components/ReviewPostFC";

function MyApp() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" className="App-logo" />
        <br />
        <img src={image} alt="amazing_toy" />
        <h5>[Authentic] Revengers - Incredible Fella</h5>
        <span>P150.00</span>
      </div>
      <div>
        <div>
          <p>Reviews:</p>
          <label>User Name:</label>
          <input type="text" />
          <br />
          <label>Review: </label>
          <input type="text" />
          <br />
          <label>Rating: </label>
          <input type="text" />
          <br />
          <button>Add Review</button>
          <br />
        </div>
        <div>
          <ReviewPost username="Leonard" rating={5} review="Awesome!" />
          <ReviewPost username="Sheldon" rating={5} review="Great!" />
          <ReviewPostFC
            username="Penny"
            rating={2}
            review="Thank you, Lazapee!"
          />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
