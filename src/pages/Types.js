import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Types.css";

export default function TypeList() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/type";

  useEffect(() => {
    setLoading(false);
    axios.get(url).then((res) => {
      setTypes(res.data.results.map((t) => t.name)); //type names are sent to array here
    });
  }, []);
  if (loading) {
    return "loading";
  }

  //typelist return
  return (
    <>
      <div className="text">
        <h1>Types</h1>
        <h3>Click on a Type Below to see their Type Match-Up Chart</h3>
      </div>
      <div className="tContainer">
        <table className="tTable">
          <tr className="tRow">
            <Link to={`/Types/${types[0]}`}>
              <td className="normal">Normal</td>
            </Link>
            <Link to={`/Types/${types[1]}`}>
              <td className="fighting">Fighting</td>
            </Link>
            <Link to={`/Types/${types[2]}`}>
              <td className="flying">Flying</td>
            </Link>
            <Link to={`/Types/${types[3]}`}>
              <td className="poison">Poison</td>
            </Link>
            <Link to={`/Types/${types[4]}`}>
              <td className="ground">Ground</td>
            </Link>
            <Link to={`/Types/${types[5]}`}>
              <td className="rock">Rock</td>
            </Link>
          </tr>
          <tr>
            <Link to={`/Types/${types[6]}`}>
              <td className="bug">Bug</td>
            </Link>
            <Link to={`/Types/${types[7]}`}>
              <td className="ghost">Ghost</td>
            </Link>
            <Link to={`/Types/${types[8]}`}>
              <td className="steel">Steel</td>
            </Link>
            <Link to={`/Types/${types[9]}`}>
              <td className="fire">Fire</td>
            </Link>
            <Link to={`/Types/${types[10]}`}>
              <td className="water">Water</td>
            </Link>
            <Link to={`/Types/${types[11]}`}>
              <td className="grass">Grass</td>
            </Link>
          </tr>
          <tr>
            <Link to={`/Types/${types[12]}`}>
              <td className="electric">Electric</td>
            </Link>
            <Link to={`/Types/${types[13]}`}>
              <td className="psychic">Psychic</td>
            </Link>
            <Link to={`/Types/${types[14]}`}>
              <td className="ice">Ice</td>
            </Link>
            <Link to={`/Types/${types[15]}`}>
              <td className="dragon">Dragon</td>
            </Link>
            <Link to={`/Types/${types[16]}`}>
              <td className="dark">Dark</td>
            </Link>
            <Link to={`/Types/${types[17]}`}>
              <td className="fairy">Fairy</td>
            </Link>
          </tr>
        </table>
      </div>
    </>
  );
}
