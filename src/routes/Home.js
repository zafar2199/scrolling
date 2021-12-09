import React from 'react';
import Header from '../components/Home/Header';
import Scrolling from '../components/Home/Scrolling';
// import Accordion from '../styles/components/home/Accordion';

const Home = () => {
  return(
    <div className="container">
      <Header />
      <Scrolling />
      {/* <Accordion /> */}
    </div>
  )
}

export default Home;