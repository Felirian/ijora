import React from 'react';
import styled from 'styled-components';
import { P } from '../app/TextTags';

const Header = () => {
  return (
    <HeaderWr>
      <DivHeaderContainerServices>
        <P>О ЖК</P>
        <P>Услуги</P>
        <P>Подбор жилья</P>
        <P>Контакты</P>
      </DivHeaderContainerServices>

      <DivHeaderContainerContacts>
        
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
  gap: 1.11vw;
`

const HeaderWr = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  border-radius: 20px;
  background-color: white;

`

export default Header;