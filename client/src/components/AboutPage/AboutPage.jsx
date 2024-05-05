import React from 'react';
import './AboutPage.scss';
import teamImage1 from '../../assets/banner-img.png';
import teamImage2 from '../../assets/banner-img.png';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui convallis, vitae bibendum libero feugiat. Duis posuere eros ut mi ullamcorper malesuada.</p>
          <p>Fusce non libero vel ligula iaculis tincidunt. Nulla id ex at magna elementum fringilla. Quisque dignissim arcu auctor feugiat feugiat.</p>
        </div>
        <div className="about-images">
          <img src={teamImage1} alt="Team 1" />
          <img src={teamImage2} alt="Team 2" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
