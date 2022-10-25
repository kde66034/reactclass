import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Slider from './components/section/Slider';
import Image from './components/section/Image';
import ImgText from './components/section/ImgText';
import Card from './components/section/Card';
import Banner from './components/section/Banner';
import Text from './components/section/Text';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "gmarket", "container"]} />
        <ImgText attr={["gmarket", "section", "gray"]} />
        <Card attr={["section", "gmarket", "container"]} />
        <Banner attr={["section", "gmarket"]} />
        <Text attr={["section", "gmarket", "container"]} />
      </Main>
      <Footer attr={["gmarket", "section", "gray"]} />
    </>
  );
}

export default App;