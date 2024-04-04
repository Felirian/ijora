import React from 'react';
import Head from "next/head";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import Filters from "../widgets/Filters";
import Contact from "../widgets/Contact";
import Map from '../widgets/Map'
import About from "../widgets/About";
import styled from "styled-components";
const Index = () => {
  //const {data, error, loading} = useQuery(GET_ITEMS)

  return (
    <Wrapper>
      <Head>
        <title>IJORA</title>
      </Head>

      <Header/>

      <About/>
      <Filters/>
      <Contact/>
      <Map/>

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