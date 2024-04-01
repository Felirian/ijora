import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {createClient} from "@supabase/supabase-js";

const supabase_key = process.env.NEXT_PUBLIC_DB_SERVICE_KEY
const supabase_url = process.env.NEXT_PUBLIC_DB_URL
const supabase = createClient(supabase_url, supabase_key);

export const client = new ApolloClient({
  uri: supabase_url + '/graphql/v1',

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    apikey: supabase_key
  },
  cache: new InMemoryCache(),
  ssrMode: false,
})

export const GET_APARTMENTS = gql`
query {  
  apartmentCollection {
    edges {
      node {
        id
        Rooms
        Cost
        Square
        Floor
        apartNumber
        Entrance
      }
    }
  }
}
`;