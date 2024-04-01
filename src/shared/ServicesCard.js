import React from 'react';
import {H4, P} from "../app/TextTags";
import styled from "styled-components";

const ServicesCard = ({img, name, text}) => {
  return (
    <CardWr>
      <Image src={img} alt={name}/>
      <H4>{name}</H4>
      <P>{text}</P>
    </CardWr>
  );
};

const CardWr = styled.div`
  
`
const Image = styled.img`
  
`
export default ServicesCard;