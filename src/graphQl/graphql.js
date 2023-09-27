import { useQuery, gql } from '@apollo/client';
import Table from '../component/Table';

const GET_API_DATA = gql`
query {
    countries {
       name
       phone
       capital
       currency  
   }
 }`;

function GraphQl() {
  const { loading, error, data } = useQuery(GET_API_DATA);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const apiData = data;
 
return (
<div>
<Table {...apiData}/>
</div>
)
 
}

export default GraphQl;