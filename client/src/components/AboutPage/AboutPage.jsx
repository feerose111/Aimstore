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
          <p>At our store, we curate a meticulously crafted collection of headphones that cater to every audiophile's needs, from the casual listener to the discerning connoisseur. Whether you're seeking the immersive soundstage of over-ear headphones, the portability of sleek in-ear buds, or the freedom of wireless connectivity, we have the perfect pair waiting for you.</p>
          <p>Indulge your senses with our selection of top-tier brands renowned for their innovation and craftsmanship. From industry giants pushing the boundaries of audio technology to boutique manufacturers with a passion for sonic excellence, we bring you the best of the best.</p>
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
