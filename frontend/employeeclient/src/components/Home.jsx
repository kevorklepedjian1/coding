import React from 'react';
import s from './s.png'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h3>Welcome to the Employee Managment system</h3>
          <h1 className='home__title'>You'r the <span>Best</span> Employee</h1>
          <h3>Lorem ipsum dolo accusantium doloremque non rerum, maiores fugit nisi ratione harum, totam similique optio quis repellendus distinctio porro.</h3>
         
          <button><a href='\employees'>Welcome</a></button>
          </div><div className="home-img">
            <img src={s} alt="" />
          </div>
          </div>
          
    </div>
  );
}

export default Home;
