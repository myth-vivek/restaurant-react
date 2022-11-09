import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur maxime eos mollitia inventore sit reprehenderit quo rerum quia! Corrupti numquam illo eaque eos ducimus odio nam ullam dolorem sapiente?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
