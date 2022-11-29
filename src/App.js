import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';

const apiKey = '--plaats jouw unieke API key hier--';

function App() {
  async function fetchData() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar/>

          <span className="location-details">
            <h2>Bewolkt</h2>
            <h3> </h3>
            <h1>14 &deg;</h1>

            <button type="button">
              Haal data op!
            </button>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;
