import React from 'react';
import {P} from "../app/TextTags";
import styled from "styled-components";

const ApartCard = ({id, Rooms, Cost, Square, Floor, apartNumber, Entrance}) => {
  return (
    <ApartCardWr>
      <Image
        src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/images/id${id}.svg`}
        alt={`item_${id}`}
        width={400}
        height={400}
        //style={{zIndex: 0}}
      />
      <P>Комнат:{Rooms == 0 ? 'Студия' : Rooms}</P>
      <P>Стоимость: {Cost}</P>
      <P>Площадь: {Square}</P>
      <P>Этаж: {Floor}</P>
      <P>Номер кв: {apartNumber}</P>
      <P>Секция: { Entrance}</P>
    </ApartCardWr>
  );
};
const ApartCardWr = styled.article`
  width: 22%;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  background-color: #ece7e7;
  border-radius: 3vw;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

export default ApartCard;