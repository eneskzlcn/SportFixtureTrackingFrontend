import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFixtureResults } from './redux/actions/fixtureResultActions';

import { getFixtures } from './redux/actions/fixtureActions';
function App() {

  const fixtureResults = useSelector((state) => state.allFixtureResults.fixtureResults)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getFixtureResults());
  },[dispatch]);

  
  console.log("fixtures: ",fixtureResults)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
    </div>
  );
}

export default App;
