import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getClubs } from './redux/actions/clubActions';

function App() {
  const clubs = useSelector((state) => state.allClubs.clubs)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getClubs());
  },[]);

  console.log("Clubs: ", clubs)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
