import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Types() {
  const getTypes = async () => {
    const url = "https://pokeapi.co/api/v2/type";
    const res = await axios.get(url);
    const types = [];
  };
}
