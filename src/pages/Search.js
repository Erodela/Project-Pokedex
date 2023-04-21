import { useState } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [pokemon, setPokemon] = useState("");
  const [pkmnData, setPkmnData] = useState([]);
  const [pkdexNum, setPkdexNum] = useState("");
  const [pkmnType2, setPkmnType2] = useState("");
  const getPokemon = async () => {
    const pkmnArr = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      pkmnArr.push(res.data);
      setPkdexNum(res.data.id);
      if (res.data.types[1]) {
        //If statement gets pokemon's second typing if it has one.
        setPkmnType2(res.data.types[1].type.name);
      } else {
        setPkmnType2(res.data.types[0].type.name);
      }
      setPkmnData(pkmnArr);
      console.log(res);
      console.log(url);
    } catch (e) {
      console.log(e);
    }
  };
  //Functions that set Pokemon on page
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  function goToNextPkmn() {
    let newPkmn1 = pkdexNum + 1;
    setPokemon(newPkmn1);
    getPokemon();
  }
  function goToPrevPkmn() {
    let newPkmn2 = pkdexNum - 1;
    setPokemon(newPkmn2);
    getPokemon();
  }
  //getPokemon return
  return (
    <div>
      <h1 className="text">Pokemon Search</h1>
      <h3 className="text">
        This is where you search for Pokemon. You search for them via National
        Dex # or by name.
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="National Dex # or Name"
        />
      </form>
      {pkmnData.map((data) => {
        //anonymous function return
        return (
          <div className="container">
            {/*Table for pokedex entry*/}
            <button onClick={goToPrevPkmn}>Prev</button>
            <img src={data.sprites["front_default"]} alt={data.name} />
            <table className="sTable">
              <tr className="dexnumber">
                <td>National Dex #:</td>
                <td>{data.id}</td>
              </tr>
              <tr className="name">
                <td>Name:</td>
                <td>
                  {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                </td>
              </tr>
              <tr className="typing">
                <td>Type:</td>
                <td>
                  <Link to={`/Types/${data.types[0].type.name}`}>
                    {data.types[0].type.name.charAt(0).toUpperCase() +
                      data.types[0].type.name.slice(1)}
                  </Link>
                  /
                  <Link to={`/Types/${pkmnType2}`}>
                    {pkmnType2.charAt(0).toUpperCase() + pkmnType2.slice(1)}
                  </Link>
                </td>
              </tr>
              <tr className="HP">
                <td>Base HP:</td>
                <td>{data.stats[0].base_stat}</td>
              </tr>
              <tr className="Atk">
                <td>Base Attack:</td>
                <td>{data.stats[1].base_stat}</td>
              </tr>
              <tr className="Def">
                <td>Base Defense:</td>
                <td>{data.stats[2].base_stat}</td>
              </tr>
              <tr className="SpA">
                <td>Base Special Attack:</td>
                <td>{data.stats[3].base_stat}</td>
              </tr>
              <tr className="SpD">
                <td>Base Special Defense:</td>
                <td>{data.stats[4].base_stat}</td>
              </tr>
              <tr className="Spe">
                <td>Base Speed:</td>
                <td>{data.stats[5].base_stat}</td>
              </tr>
            </table>
            <button onClick={goToNextPkmn}>Next</button>
          </div>
        );
      })}
    </div>
  );
};
export default Search;
