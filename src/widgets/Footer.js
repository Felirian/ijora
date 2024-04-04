import React from 'react';
import styled from "styled-components";
import { P, H1 } from '../app/TextTags';

const Footer = () => {
  return (
    <FooterWr id={'footer'}>
      <DivHeaderContainerServices>
        <a href="#about"><P>О ЖК</P></a>
        <a href="#serv"><P>Услуги</P></a>
        <a href="#filters"><P>Подбор жилья</P></a>
        <a href="#footer"><P>Контакты</P></a>
      </DivHeaderContainerServices>

      <H1>IJORA</H1>

      <DivHeaderContainerContacts>
        <P>Санкт-Петербург, ул.Большая Морская,18, Россия, 191186</P>
        <P>88121112233</P>
        <P>info@izhora.ru</P>
      </DivHeaderContainerContacts>
    </FooterWr>
  );
};

const FooterWr = styled.footer`
  display: flex;
  width: 100%;
  gap: 17.76vw;
  align-items: center;
  justify-content: center;
  position: absolute;
  left:0;
  margin-top: 10vw;

`

const DivHeaderContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.11vw;
`
const DivHeaderContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.16vw;
  width: 21.82vw;
`

export default Footer;