import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_APARTMENTS } from "../supabase/services";
import { H2, H3 } from "../app/TextTags";
import ApartCard from "../shared/ApartCard";
import { Slider, Typography, Select, MenuItem } from '@mui/material';
import styled from "styled-components";

const Filters = () => {
  const [priceFilter, setPriceFilter] = useState([1000000, 20000000]); // Диапазон цен по умолчанию
  const [areaFilter, setAreaFilter] = useState([20, 100]); // Диапазон площадей по умолчанию
  const [roomsFilter, setRoomsFilter] = useState([]); // Фильтр по количеству комнат

  const handlePriceChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  const handleAreaChange = (event, newValue) => {
    setAreaFilter(newValue);
  };

  const handleRoomsChange = (event) => {
    setRoomsFilter(event.target.value);
  };

  const { data, loading, error } = useQuery(GET_APARTMENTS, {
    // variables: {
    //   minCost: priceFilter[0],
    //   maxCost: priceFilter[1]
    // }
  });

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <Typography id="price-range-slider" gutterBottom>
          <H3>Стоимость</H3>
        </Typography>
        <Slider
          value={priceFilter}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={1000000}
          max={20000000}
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Typography id="area-range-slider" gutterBottom>
          <H3>Площадь</H3>
        </Typography>
        <Slider
          value={areaFilter}
          onChange={handleAreaChange}
          valueLabelDisplay="auto"
          aria-labelledby="area-range-slider"
          min={20}
          max={100}
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Typography id="rooms-select" gutterBottom>
          <H3>Количество комнат</H3>
        </Typography>
        <Select
          multiple
          value={roomsFilter}
          onChange={handleRoomsChange}
          displayEmpty

        >
          <MenuItem value={0}>Студия</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4 и более</MenuItem>
        </Select>
      </div>
      {loading ? (
        <>
          <H2>Loading</H2>
        </>
      ) : error ? (
        <>
          <H2>Error</H2>
        </>
      ) : (
        <ApartWr>
          {data?.apartmentCollection.edges
            .filter(apart => parseInt(apart.node.Cost) >= priceFilter[0] && parseInt(apart.node.Cost) <= priceFilter[1])
            .filter(apart => parseInt(apart.node.Square) >= areaFilter[0] && parseInt(apart.node.Square) <= areaFilter[1])
            .filter(apart => roomsFilter.length === 0 || roomsFilter.includes(parseInt(apart.node.Rooms)))
            .map((apart, index) => (
              <ApartCard
                key={`aprt_${index}`}
                id={apart.node.id}
                Rooms={apart.node.Rooms}
                Cost={apart.node.Cost}
                Square={apart.node.Square}
                Floor={apart.node.Floor}
                apartNumber={apart.node.apartNumber}
                Entrance={apart.node.Entrance}
              />
            ))}
        </ApartWr>
      )}
    </>
  );
};

const ApartWr = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3vw;
  width: 100%;
  min-height: 30vw;
`

export default Filters;
