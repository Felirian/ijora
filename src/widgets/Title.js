import React from 'react';
import {P} from "../app/TextTags";
import styled from "styled-components";
import img from "../assets/bannerImg.png"

const Title = () => {
  console.log(img);
  return (
    <BannerWr>
      <Image src={img.src} alt={''}/>
      <P>Новый элитный жилой комплекс, расположенный в 20 минутах от города </P>
    </BannerWr>
  );
};

const BannerWr = styled.div`
  margin-top: 2.08vw;
  left: 0 ;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  & > ${P} {
    width: 24.58vw;
    position: absolute;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;

`

export default Title;