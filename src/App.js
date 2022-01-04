import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getClub } from './redux/actions/clubActions';

function App() {

  const club = useSelector((state) => state.allClubs.selectedClub)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getClub(3006));
  },[dispatch]);

  
  console.log("Selected club: ",club)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
