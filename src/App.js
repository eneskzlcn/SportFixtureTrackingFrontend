import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getClubs } from './redux/actions/clubActions';
import { getTeams } from './redux/actions/teamActions';

function App() {
  const clubs = useSelector((state) => state.allClubs.clubs)
  const teams = useSelector((state) => state.allTeams.teams)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getClubs());
    dispatch(getTeams());
  },[]);

  console.log("Clubs: ", clubs)
  console.log("Teams: ",teams)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
