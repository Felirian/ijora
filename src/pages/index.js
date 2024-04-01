import React from 'react';
import Head from "next/head";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import Filters from "../widgets/Filters";
import Contact from "../widgets/Contact";
import Map from '../widgets/Map'
const Index = () => {
  //const {data, error, loading} = useQuery(GET_ITEMS)

  return (
    <>
      <Head>
        <title>IJORA</title>
      </Head>

      <Header/>


      <Filters/>
      <Contact/>
      <Map/>

      <Footer/>
    </>
  );
};

export default Index;