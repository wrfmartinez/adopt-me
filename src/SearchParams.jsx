import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleInputChange}
            value={location}
            placeholder="search a location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
