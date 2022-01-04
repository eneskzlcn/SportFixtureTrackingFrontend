import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFixtures } from './redux/actions/fixtureActions';
function App() {

  const fixtures = useSelector((state) => state.allFixtures.fixtures)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getFixtures());
  },[dispatch]);

  
  console.log("fixtures: ",fixtures)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
