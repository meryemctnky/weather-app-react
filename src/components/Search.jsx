import React, {useState} from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useWeather } from "../contexts/WeatherContext";

const Search = ({setShowMap}) => {
  const { getCurrentWeather } = useWeather();
  const [search, setSearch] = useState("");

    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();

    const location = search.trim();

    if (!location) {
      console.log("hataaaaa")
    }
    getCurrentWeather(location);
    setSearch("");
    }

    const showMapHandle = () => {
      setShowMap(true)
    }


  return (
    <div className="container">
    <div className="row d-flex justify-content-center mb-3">
      <div className="col-7 ">
        <form className="input-group mb-2" onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search city..." />
          <button className="btn btn-secondary me-1" type="submit">
            <FaSearch />
          </button>
          <button className="btn btn-secondary rounded-0" type="submit" onClick={showMapHandle} >
            <FaMapMarkerAlt />
          </button>
        </form>
      </div>
    </div>

    </div>
  );
};

export default Search;
