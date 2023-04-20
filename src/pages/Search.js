import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = (props) => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [pkmnData, setPkmnData] = useState([]);
  const [pkmnType1, setPkmnType1] = useState("");
  const [pkmnType2, setPkmnType2] = useState("");
  const getPokemon = async () => {
    const pkmnArr = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      pkmnArr.push(res.data);
      setPkmnType1(res.data.types[0].type.name);
      if (res.data.types[1]) {
        setPkmnType2(res.data.types[1].type.name);
      } else {
        setPkmnType2(res.data.types[0].type.name);
      }
      setPkmnData(pkmnArr);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div>
      <h1>Search</h1>
      <p>
        This is where you search for Pokemon. You search for them via National
        Dex # or by name.
      </p>
      <form onSubmit={handleSubmit}>
        {/* <label> */}
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Pokemon's name."
        />
        {/* </label> */}
      </form>
      {pkmnData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <table>
              <tr className="typing">
                <td>Type</td>
                <td>
                  {pkmnType1}/{pkmnType2}
                </td>
              </tr>
              <tr className=""></tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default Search;
