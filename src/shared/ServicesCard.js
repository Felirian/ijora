import React from 'react';
import {H4, P} from "../app/TextTags";
import styled from "styled-components";
import {BREAKPOINTS} from "../app/variables";

const ServicesCard = ({img, name, text}) => {
  return (
    <CardWr data-aos="flip-down">
      <Image src={img} alt={name}/>
      <TextWr data-aos={"fade-right"}>
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
  @media ${BREAKPOINTS.mobile} {
    width: 85%;
    height: auto;
  }
`
const TextWr = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
  
  position: absolute;
  left: 0;
  bottom: 0;
  @media ${BREAKPOINTS.mobile} {
    h4 {
      font-size: 5vw;
    }
    p {
      font-size: 3vw;
    }
  }
  
`
const Image = styled.img`
  width: 100%;
  height: auto;
`
export default ServicesCard;