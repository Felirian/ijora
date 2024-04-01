import React from 'react';
import {ApolloProvider} from "@apollo/client";
import {client} from "../supabase/services";
import {GlobalStyles} from "../app/styles";
const _App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyles/>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default _App;