import React from 'react';
import styled from 'styled-components';
import { P, H1 } from '../app/TextTags';

const Header = () => {
  return (
    <HeaderWr>
      <DivHeaderContainerServices>
      <a href="#about"><P>О ЖК</P></a>
      <a href="#serv"><P>Услуги</P></a>
      <a href="#filters"><P>Подбор жилья</P></a>
      <a href="#footer"><P>Контакты</P></a>
      </DivHeaderContainerServices>
      <H1>IJORA</H1>
      <DivHeaderContainerContacts>
        <P>88121112233</P>
        <P>info@izhora.ru</P>
      </DivHeaderContainerContacts>
    </HeaderWr>
  );
};

const DivHeaderContainerServices = styled.div`
  display: flex;
  flex-direction: row;
  
  gap: 1.11vw;
`
const DivHeaderContainerContacts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.16vw;
`

const HeaderWr = styled.header`
  width: 96%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  
  background-color: white;
  
  display: flex;
  flex-direction: row;
  gap:4.67vw;
  align-items: center;
  justify-content: center;

  
  border-radius: 1vw;
  margin: 2vw;
`

export default Header;