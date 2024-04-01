import React from 'react';
import {H4, P} from "../app/TextTags";
import styled from "styled-components";

const ServicesCard = ({img, name, text}) => {
  return (
    <CardWr>
      <Image src={img} alt={name}/>
      <TextWr>
        <H4>{name}</H4>
        <P>{text}</P>
      </TextWr>
    </CardWr>
  );
};

const CardWr = styled.div`
  width: 39.58vw;
  height: 51.04vw;
  overflow: hidden;
  position: relative;
`
const TextWr = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
  
  position: absolute;
  left: 0;
  bottom: 0;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`
export default ServicesCard;