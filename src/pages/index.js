import React, {useEffect} from 'react';
import Head from "next/head";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import Filters from "../widgets/Filters";
import Contact from "../widgets/Contact";
import Map from '../widgets/Map'
import About from "../widgets/About";
import styled from "styled-components";
import Title from '../widgets/Title';


import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>IJORA</title>
      </Head>

      <Header/>
      <Title/>
      <About/>
      <Filters/>

      <Footer/>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 8% ;
  position: relative;
`

export default Index;