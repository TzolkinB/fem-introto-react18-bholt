// useBreedList refactored to use react-query method, fetchBreedList
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList)
  return [results?.data?.breeds ?? [], results.status]
}

/* ----- useBreedList as a customHook ----- */
// import { useState, useEffect } from "react"; 

// const localCache = {};

// function useBreedList(animal) {
//   const [breedList, setBreedList] = useState([]);
//   const [status, setStatus] = useState("unloaded");

//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const json = await res.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal]);

//   return [breedList, status];
// }

export default useBreedList