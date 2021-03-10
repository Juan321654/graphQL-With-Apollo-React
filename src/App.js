import './App.css';
import { useQuery, gql} from '@apollo/client';

const ALL_USERS = gql`
  query {
  getUsers{
    id
    name
    email
  }
}`;

function App() {
  const {loading, error, data } = useQuery(ALL_USERS)
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Whoops.. something went wrong!</p>
  return (
    <div className="App">
      <h2>Users: </h2>
      {console.log(data.getUsers)}
      {/* cant map because the api only has one user */}
      {/* {data.getUser.map((user, id) => (
        <div key={id}>{user.name}</div>
      ))} */}
    </div>
  );
}

export default App;
