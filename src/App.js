import React from "react";
import MyContainer from "./components/MyContainer";
import { WeatherProvider } from "./contexts/WeatherContext";


function App() {
  return (
    <WeatherProvider>
      <main className="main">
        <MyContainer />
      </main>
    </WeatherProvider>
  );
}

export default App;
