import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_APARTMENTS} from "../supabase/services";
import {H2} from "../app/TextTags";
import ApartCard from "../shared/ApartCard";

const Filters = () => {

  const {data, loading, error} = useQuery(GET_APARTMENTS, {
    //variables: {slug: id}
  })


  return (
    <>
      {loading ? (
        <>
          <H2>Loading</H2>
        </>
      ) : error ? (
        <>
          <H2>Error</H2>
        </>
      ) : (
        <>
          {data?.apartmentCollection.edges.map((apart, index)=> (
            <ApartCard
              key={`aprt_${index}`}
              id={apart.node.id}
              Rooms={apart.node.Rooms}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Filters;