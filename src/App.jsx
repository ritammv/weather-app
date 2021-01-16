import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import { WeatherContext } from './services/context';
import ApiService from './services/apiService';

function App() {
  const [londonWeather, setLondonWeather] = useState({});

  useEffect(async () => {
    await ApiService.getLondonWeather().then((res) => setLondonWeather(res));
  }, []);

  return (
    <WeatherContext.Provider value={londonWeather}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather" component={Weather} />
        </Switch>
      </Router>
    </WeatherContext.Provider>
  );
}

export default App;
