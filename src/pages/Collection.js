import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Collection = ({ props }) => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)), //prevents new requests from overriding old requests that are still loading
      })
      .then((res) => {
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name)); //pokemon's name prints here
      });
    return () => {
      cancel();
    };
  }, [currentPageUrl]);
  if (loading) {
    return "loading";
  }

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div>
      <h1>Collection</h1>
      <p>
        This is where you can look at the Pokemon you own. They'll be listed
        here or maybe you can search for them.
      </p>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
      {goToPrevPage && <button onClick={goToPrevPage}>prev</button>}
      {goToNextPage && <button onClick={goToNextPage}>next</button>}
    </div>
  );
};
export default Collection;
