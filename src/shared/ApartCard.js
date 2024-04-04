import React from 'react';
import {H2, H4, P} from "../app/TextTags";
import styled from "styled-components";
import {BREAKPOINTS} from "../app/variables";

const ApartCard = ({id, Rooms, Cost, Square, Floor, apartNumber, Entrance}) => {
  return (
    <ApartCardWr>
      <Image
        src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/images/id${id}.svg`}
        alt={`item_${id}`}
        width={400}
        height={400}
      />
      <RoomsWr>
        <P>{Rooms == 0 ? 'Студия' : `${Rooms} комнатная`}</P>
      </RoomsWr>

      <P>Цена: {Cost}₽</P>
      <H4>{Square} m²</H4>
      <P>{Floor}-й этаж</P>
    </ApartCardWr>
  );
};
const ApartCardWr = styled.div`
  width: 22%;
  display: flex;
  
  gap: 1vw;
  flex-direction: column;
  padding: 1vw;
  background-color: #ece7e7;
  border-radius: 3vw;
  position: relative;
  @media ${BREAKPOINTS.mobile} {
    width: 45%;
  }
`
const RoomsWr = styled.div`
  position: absolute;
  display: flex;
  padding: 1vw;
  
  background-color: white;
  border-radius: 100vw;
`
const Image = styled.img`
  margin-top: 4vw;
  width: 100%;
  height: auto;
`

export default ApartCard;