import React from 'react';
import styled from "styled-components";
import {H2, H4, P} from "../app/TextTags";

import img1 from '../assets/servicesImg1.png';
import img2 from '../assets/servicesImg2.png';
import img3 from '../assets/servicesImg3.png';
import img4 from '../assets/servicesImg4.png';

import ServicesCard from "../shared/ServicesCard";

const SERVICES = [
  {
    name: 'Подбор квартиры',
    text:'Наши специалисты подберут вам подходящую квартиру из базы в более чем ста жилищных комплексов',
    img: img1
  },
  {
    name: 'Ипотека',
    text:'Поможем подобрать и оформить ипотеку на покупку жилья',
    img: img2
  },
  {
    name: 'Продажа вторичного жилья',
    text:'Поможем продать вашу квартиру на вторичном рынке ',
    img: img3
  },
  {
    name: 'Сопровождение сделок',
    text:'Поможем продать вашу квартиру на вторичном рынке',
    img: img4
  },
]
const About = () => {
  return (
    <Wr>
      <TextBlock>
        <H2>О жилом<br/>комплексе</H2>
        <P>
          Коттеджный поселок «Новая Ижора» расположен в Пушкинском районе Санкт-Петербурга, относящемуся
          к числу наиболее престижных и развивающихся районов города. «Новая Ижора» - это сообщество людей,
          объединенных одними ценностями - жизнь в собственном доме на своей земле, комфорт и безопасность детей,
          дружелюбное соседское общение. Здесь особая атмосфера, которую невозможно найти в кварталах многоэтажных,
          многоквартирных домов. Поселок развивается с 2006 года
          в формате ИЖС.
        </P>
      </TextBlock>

      <H2>Наши услуги</H2>
      <ServicesWr>
        {SERVICES.map((card, i)=> (
          <ServicesCard key={`services_${i}`} name={card.name} text={card.text} img={card.img.src}/>
        ))}
      </ServicesWr>


      <TextBlock>
        <H2>Наши акции</H2>

        <ul>
          <H4>
            Подробнее о действующих акциях
            вам расскажет наш консультант
          </H4>
          <li><P>Возвращаем до 50 000 руб. при покупке у нас</P></li>
          <li><P>Цены напрямую от застройщика</P></li>
          <li><P>Вы не платите нам за нашу работу, наши услуги оплачивает застройщик</P></li>
          <li><P>Каждому пятому клиенту скидка 60 000 руб.</P></li>
          <li><P>Помогаем оформить ипотеку, мы работаем с более двадцати разными банками по ипотеке</P></li>
        </ul>

      </TextBlock>
    </Wr>
  );
};
const Wr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.77vw;
  margin-top: 10vw;
`
const TextBlock = styled.section`
  display: flex;
  gap: 5.21vw;
  li {
    margin-left: 1vw;
    margin-top: 1vw;
  }
`

const ServicesWr = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3vw;
`

export default About;