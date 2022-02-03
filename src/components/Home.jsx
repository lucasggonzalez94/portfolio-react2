import React from 'react';
import AboutMe from './AboutMe';

import Banner from './Banner';
// import Footer from './Footer';
import Menu from './Menu';
import Proyects from './Proyects';

function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <AboutMe />
      <Proyects />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
