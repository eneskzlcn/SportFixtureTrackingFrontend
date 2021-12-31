import logo from './logo.svg';
import './App.css';
import SportFixtureApiConsumer from './consumer/SportFixtureApiConsumer.js';

function App() {
    var s = new SportFixtureApiConsumer("https:/127.0.0.1:3000/")
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >

        <
        /header> <
        /div>
    );
}

export default App;