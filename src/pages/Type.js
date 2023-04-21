import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Type() {
  const { type } = useParams();
  const [matchUp, setMatchUp] = useState([]);
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  // const url2 = "https://pokeapi.co/api/v2/type";

  const getMatchUp = async () => {
    const matchUpArr = [];
    try {
      const res = await axios.get(url);
      matchUpArr.push(res.data.damage_relations);
      setMatchUp(matchUpArr);
      //console.log(matchUp);
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   setLoading(false);
  //   axios.get(url2).then((res) => {
  //     setTypes(res.data.results.map((t) => t.name)); //type names are sent to array here
  //   });
  // }, []);
  // if (loading) {
  //   return "loading";
  // }
  //console.log(matchUp);
  //Type return
  return (
    <div>
      <h1 className="text">
        {type.charAt(0).toUpperCase() + type.slice(1) + " Type"}
      </h1>
      <h3 className="text">
        Click this button to see {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
        type's match-up chart.
      </h3>
      <button onClick={getMatchUp}>CLICK</button>
      {matchUp.map((data) => {
        return (
          <div className="container">
            <table>
              <tr>
                <td>Super Effective against:</td>
                <td>Weak against:</td>
                <td>Not Very Effective against:</td>
                <td>Resistant against:</td>
                <td>No Effect to:</td>
                <td>Immune to:</td>
              </tr>
              <tr>
                <td className="SuperEffective">
                  {data.double_damage_to[0] &&
                    data.double_damage_to[0].name.charAt(0).toUpperCase() +
                      data.double_damage_to[0].name.slice(1)}
                  <br></br>
                  {data.double_damage_to[1] &&
                    data.double_damage_to[1].name.charAt(0).toUpperCase() +
                      data.double_damage_to[1].name.slice(1)}
                  <br></br>
                  {data.double_damage_to[2] &&
                    data.double_damage_to[2].name.charAt(0).toUpperCase() +
                      data.double_damage_to[2].name.slice(1)}
                  <br></br>
                  {data.double_damage_to[3] &&
                    data.double_damage_to[3].name.charAt(0).toUpperCase() +
                      data.double_damage_to[3].name.slice(1)}
                  <br></br>
                  {data.double_damage_to[4] &&
                    data.double_damage_to[4].name.charAt(0).toUpperCase() +
                      data.double_damage_to[4].name.slice(1)}
                </td>
                <td className="Weakness">
                  {data.double_damage_from[0].name.charAt(0).toUpperCase() +
                    data.double_damage_from[0].name.slice(1)}
                  <br></br>
                  {data.double_damage_from[1] &&
                    data.double_damage_from[1].name.charAt(0).toUpperCase() +
                      data.double_damage_from[1].name.slice(1)}
                  <br></br>
                  {data.double_damage_from[2] &&
                    data.double_damage_from[2].name.charAt(0).toUpperCase() +
                      data.double_damage_from[2].name.slice(1)}
                  <br></br>
                  {data.double_damage_from[3] &&
                    data.double_damage_from[3].name.charAt(0).toUpperCase() +
                      data.double_damage_from[3].name.slice(1)}
                  <br></br>
                  {data.double_damage_from[4] &&
                    data.double_damage_from[4].name.charAt(0).toUpperCase() +
                      data.double_damage_from[4].name.slice(1)}
                </td>
                <td className="NotVeryEffective">
                  {data.half_damage_to[0] &&
                    data.half_damage_to[0].name.charAt(0).toUpperCase() +
                      data.half_damage_to[0].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[1] &&
                    data.half_damage_to[1].name.charAt(0).toUpperCase() +
                      data.half_damage_to[1].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[2] &&
                    data.half_damage_to[2].name.charAt(0).toUpperCase() +
                      data.half_damage_to[2].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[3] &&
                    data.half_damage_to[3].name.charAt(0).toUpperCase() +
                      data.half_damage_to[3].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[4] &&
                    data.half_damage_to[4].name.charAt(0).toUpperCase() +
                      data.half_damage_to[4].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[5] &&
                    data.half_damage_to[5].name.charAt(0).toUpperCase() +
                      data.half_damage_to[5].name.slice(1)}
                  <br></br>
                  {data.half_damage_to[6] &&
                    data.half_damage_to[6].name.charAt(0).toUpperCase() +
                      data.half_damage_to[6].name.slice(1)}
                </td>
                <td className="Resistance">
                  {data.half_damage_from[0] &&
                    data.half_damage_from[0].name.charAt(0).toUpperCase() +
                      data.half_damage_from[0].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[1] &&
                    data.half_damage_from[1].name.charAt(0).toUpperCase() +
                      data.half_damage_from[1].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[2] &&
                    data.half_damage_from[2].name.charAt(0).toUpperCase() +
                      data.half_damage_from[2].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[3] &&
                    data.half_damage_from[3].name.charAt(0).toUpperCase() +
                      data.half_damage_from[3].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[4] &&
                    data.half_damage_from[4].name.charAt(0).toUpperCase() +
                      data.half_damage_from[4].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[5] &&
                    data.half_damage_from[5].name.charAt(0).toUpperCase() +
                      data.half_damage_from[5].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[6] &&
                    data.half_damage_from[6].name.charAt(0).toUpperCase() +
                      data.half_damage_from[6].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[7] &&
                    data.half_damage_from[7].name.charAt(0).toUpperCase() +
                      data.half_damage_from[7].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[8] &&
                    data.half_damage_from[8].name.charAt(0).toUpperCase() +
                      data.half_damage_from[8].name.slice(1)}
                  <br></br>
                  {data.half_damage_from[9] &&
                    data.half_damage_from[9].name.charAt(0).toUpperCase() +
                      data.half_damage_from[9].name.slice(1)}
                </td>
                <td className="Inneffective">
                  {data.no_damage_to[0] &&
                    data.no_damage_to[0].name.charAt(0).toUpperCase() +
                      data.no_damage_to[0].name.slice(1)}
                </td>
                <td className="ImmuneTo">
                  {data.no_damage_from[0] &&
                    data.no_damage_from[0].name.charAt(0).toUpperCase() +
                      data.no_damage_from[0].name.slice(1)}
                  <br></br>
                  {data.no_damage_from[1] &&
                    data.no_damage_from[1].name.charAt(0).toUpperCase() +
                      data.no_damage_from[1].name.slice(1)}
                </td>
              </tr>
            </table>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
