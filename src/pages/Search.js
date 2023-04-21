import { useState } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [pokemon, setPokemon] = useState("");
  const [pkmnData, setPkmnData] = useState([]);
  const [pkmnType1, setPkmnType1] = useState("");
  const [pkmnType2, setPkmnType2] = useState("");
  const [pkmnName, setPkmnName] = useState("");
  const [pkdexNum, setPkdexNum] = useState("");
  const [pkmnHP, setPkmnHP] = useState("");
  const [pkmnAtk, setPkmnAtk] = useState("");
  const [pkmnDef, setPkmnDef] = useState("");
  const [pkmnSpA, setPkmnSpA] = useState("");
  const [pkmnSpD, setPkmnSpD] = useState("");
  const [pkmnSpe, setPkmnSpe] = useState("");

  const getPokemon = async () => {
    const pkmnArr = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      pkmnArr.push(res.data);
      setPkmnType1(res.data.types[0].type.name);
      if (res.data.types[1]) {
        //If statement gets pokemon's second typing if it has one.
        setPkmnType2(res.data.types[1].type.name);
      } else {
        setPkmnType2(res.data.types[0].type.name);
      }
      setPkmnName(res.data.species.name);
      setPkmnHP(res.data.stats[0].base_stat);
      setPkmnAtk(res.data.stats[1].base_stat);
      setPkmnDef(res.data.stats[2].base_stat);
      setPkmnSpA(res.data.stats[3].base_stat);
      setPkmnSpD(res.data.stats[4].base_stat);
      setPkmnSpe(res.data.stats[5].base_stat);
      setPkdexNum(res.data.id);
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

  return (
    <div>
      <h1 className="text">Pokemon Search</h1>
      <p className="text">
        This is where you search for Pokemon. You search for them via National
        Dex # or by name.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="National Dex # or Name"
        />
      </form>
      {pkmnData.map((data) => {
        return (
          <div className="container">
            {/*Table for pokedex entry*/}
            <img src={data.sprites["front_default"]} alt={pkmnName} />
            <table>
              <tr className="dexnumber">
                <td>National Dex #:</td>
                <td>{pkdexNum}</td>
              </tr>
              <tr className="name">
                <td>Name:</td>
                <td>{pkmnName.charAt(0).toUpperCase() + pkmnName.slice(1)}</td>
              </tr>
              <tr className="typing">
                <td>Type:</td>
                <td>
                  <Link to="/Types">
                    {pkmnType1.charAt(0).toUpperCase() + pkmnType1.slice(1)}
                  </Link>
                  /
                  <Link to="/Types">
                    {pkmnType2.charAt(0).toUpperCase() + pkmnType2.slice(1)}
                  </Link>
                </td>
              </tr>
              <tr className="HP">
                <td>Base HP:</td>
                <td>{pkmnHP}</td>
              </tr>
              <tr className="Atk">
                <td>Base Attack:</td>
                <td>{pkmnAtk}</td>
              </tr>
              <tr className="Def">
                <td>Base Defense:</td>
                <td>{pkmnDef}</td>
              </tr>
              <tr className="SpA">
                <td>Base Special Attack:</td>
                <td>{pkmnSpA}</td>
              </tr>
              <tr className="SpD">
                <td>Base Special Defense:</td>
                <td>{pkmnSpD}</td>
              </tr>
              <tr className="Spe">
                <td>Base Speed:</td>
                <td>{pkmnSpe}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default Search;
