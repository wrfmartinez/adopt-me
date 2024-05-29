import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };
  const handleAnimalSelectChange = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };
  const handleBreedSelectChange = (e) => {
    setBreed(e.target.value);
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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleAnimalSelectChange}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={handleBreedSelectChange}
            disabled={BREEDS.length === 0}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
