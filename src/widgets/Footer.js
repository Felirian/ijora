import React from 'react';
import styled from "styled-components";
import { P, H1 } from '../app/TextTags';

const Footer = () => {
  return (
    <FooterWr>
      <DivFooterContainerServices>
      <a href="#"><P>О ЖК</P></a>
      <a href="#"><P>Услуги</P></a>
      <a href="#"><P>Подбор жилья</P></a>
      <a href="#"><P>Контакты</P></a>
      </DivFooterContainerServices>

      <H1>IJORA</H1>

      <DivFooterContainerContacts>
        <P>Санкт-Петербург, ул.Большая Морская,18, Россия, 191186</P>
        <P>88121112233</P>
        <P>info@izhora.ru</P>
      </DivFooterContainerContacts>
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
`

const DivFooterContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.11vw;
`
const DivFooterContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.16vw;
  width: 21.82vw;
  align-items: flex-end;
`

export default Footer;