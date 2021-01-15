import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import video from '../../assets/background.mp4';

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/weather');
  };

  return (
    <>
      <div className="home_wrapper">
        <video className="background_video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="home_text">
          <h1>Weather on Demand</h1>
          <h3>The most accurate weather app on the market</h3>
          <button onClick={handleClick} className="enter_btn" type="button">
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
