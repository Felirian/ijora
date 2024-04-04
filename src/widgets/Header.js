import React from 'react';
import styled from 'styled-components';
import { P, H1 } from '../app/TextTags';

const Header = () => {
  return (
    <HeaderWr>
      <DivHeaderContainerServices>
      <a href="#"><P>О ЖК</P></a>
      <a href="#"><P>Услуги</P></a>
      <a href="#"><P>Подбор жилья</P></a>
      <a href="#"><P>Контакты</P></a>
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
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  border-radius: 20px;
  background-color: white;

  display: flex;
  flex-direction: row;
  gap:4.67vw;
  align-items: center;
  justify-content: center;

`

export default Header;