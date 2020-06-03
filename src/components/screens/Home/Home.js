import React from "react";
import { Link } from "react-router-dom";
import vid from "../../../imgs/vid.mov";
import "./Home.css";

function Home() {
  return (
    <div className='v-header Home-container'>
      <div className='video-wrap'>
        <video src={vid} autoplay='true' loop='true' />
      </div>
      <div className='header-overlay' />
      <div className='header-content'>
        <h1 className='display-3'>Welcome to AI Club</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem, nihil atque laboriosam consequuntur incidunt ad
          ducimus non consectetur corrupti cupiditate!
        </p>
        <Link to='/about'>
          <button className='btn btn-primary btn-lg'>Learn more</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
