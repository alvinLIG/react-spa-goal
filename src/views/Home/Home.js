import React, { Fragment } from 'react';
import Slider from './components/Slider';
import Posts from './components/Posts';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Posts />
    </Fragment>
  )
}

export default Home;
