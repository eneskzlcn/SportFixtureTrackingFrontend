import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getSports } from './redux/actions/sportActions';
function App() {

  const sports = useSelector((state) => state.allSports.sports)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getSports());
  },[]);

  
  console.log("Sports: ",sports)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
