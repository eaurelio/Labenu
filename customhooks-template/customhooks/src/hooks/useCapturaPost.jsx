import axios from "axios";
import {useState, useEffect} from "react";
import { BASE_URL } from "../constants/constants";

export default function useCapturaPost () {
  const [postagens, setPostagens] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return postagens
}