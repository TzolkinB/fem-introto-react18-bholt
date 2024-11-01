import { useState, useEffect } from "react";
import Results from "./Results";
// import Pet from "./Pet";
import useBreedList from "./useBreedList";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  useEffect(() => {
    requestPets();
  // empty array means only run on initial load
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault()
        requestPets()
      }}>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {/* {
        pets.map(pet => (
          <Pet key={pet.id} name={pet.name} animale={pet.animal} breed={pet.breed} />
        ))
        
      } */}
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParams;
