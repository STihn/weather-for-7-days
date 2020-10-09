import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import getWeatherInfo from './components/Api/Api'; 

function App() {

  const [currentWeather, setCurrentWeather] = React.useState([]);

  React.useEffect(() => {
      getWeatherInfo()
      .then((data) => {
        setCurrentWeather(data.daily);
      })
  }, []);


  return (
    <div className="App">
        <Header />
        <Main 
        weatherLists={currentWeather}
        />
    </div>
  );
}

export default App;
