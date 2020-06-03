import React, { Fragment } from "react";
import "./About.css";
import userImg from "../../../imgs/abdur.png";
import userImg1 from "../../../imgs/ashba.png";
import userImg2 from "../../../imgs/husun.png";
import userImg3 from "../../../imgs/saad.png";
import userImg4 from "../../../imgs/sabah.png";
import userImg5 from "../../../imgs/saud.png";
import building1 from "../../../imgs/building1.jpg";

function About() {
  return (
    <Fragment className='container'>
      <div className='pimg1'>
        <div className='ptext'>
          <span className='About-mainHead border font-weight-bold'>
            Artificial intelligence at its Best
          </span>
        </div>
      </div>

      <section className='section section-dark'>
        <h2 className='display-5 font-weight-bold py-5'>Our First EXCOMM</h2>
        <p className='pb-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos possimus
          fugit ab earum adipisci illum, nam aliquid, reiciendis doloribus
          veniam consectetur. Deleniti expedita culpa perferendis porro non
          ipsam veritatis minus.
        </p>
        <div className='row'>
          <div className='col mb-4'>
            <img src={userImg} alt='user' className='rounded-circle' />
          </div>
          <div className='col mb-4'>
            <img src={userImg1} alt='user' className='rounded-circle' />
          </div>
          <div className='col mb-4'>
            <img src={userImg2} alt='user' className='rounded-circle' />
          </div>
          <div className='col mb-4'>
            <img src={userImg3} alt='user' className='rounded-circle' />
          </div>
          <div className='col mb-4'>
            <img src={userImg4} alt='user' className='rounded-circle' />
          </div>
          <div className='col mb-4'>
            <img src={userImg5} alt='user' className='rounded-circle' />
          </div>
        </div>
      </section>

      <div className='pimg2'>
        <div className='ptext'>
          <span className='display-4 border trans font-weight-bold '>
            Top Notch Quality
          </span>
        </div>
      </div>

      <section className='section section-light'>
        <h2 className='display-5 font-weight-bold py-4'>Our Major Events</h2>
        <div className='row'>
          <div className='col mb-4'>
            <img src={building1} alt='user' className='rounded' />
            <p className='font-weight-bold my-4'>X</p>
          </div>
          <div className='col mb-4'>
            <img src={building1} alt='user' className='rounded' />
            <p className='font-weight-bold my-4'>Y</p>
          </div>
          <div className='col'>
            <img src={building1} alt='user' className='rounded' />
            <p className='font-weight-bold my-4'>Z</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
