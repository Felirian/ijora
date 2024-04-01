import React from 'react';
import {ApolloProvider} from "@apollo/client";
import {client} from "../supabase/services";
const _App = ({Component, pageProps}) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default _App;