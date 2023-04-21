import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Type(props) {
  const { type } = useParams();
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  const [damageRelations, setDamageRelations] = useState([]);
  const getMatchUp = async () => {};
  return (
    <div className="container text">
      <h1>{type}</h1>
    </div>
  );
}
