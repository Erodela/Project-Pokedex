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
  return (
    <div className="tContainer">
      <table className="tTable">
        <tr className="tRow">
          <td className="tD">{types[0]}</td>
          <td>{types[1]}</td>
          <td>{types[2]}</td>
          <td>{types[3]}</td>
          <td>{types[4]}</td>
          <td>{types[5]}</td>
        </tr>
        <tr>
          <td>{types[6]}</td>
          <td>{types[7]}</td>
          <td>{types[8]}</td>
          <td>{types[9]}</td>
          <td>{types[10]}</td>
          <td>{types[11]}</td>
        </tr>
        <tr>
          <td>{types[12]}</td>
          <td>{types[13]}</td>
          <td>{types[14]}</td>
          <td>{types[15]}</td>
          <td>{types[16]}</td>
          <td>{types[17]}</td>
        </tr>
      </table>
    </div>
  );
}
