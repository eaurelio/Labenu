import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


export default function UseRequestData (url, path = '') {

  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${url}${path}`)
      .then((response) => {
        setDados(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      });
  }, []);

  return [dados, isLoading, error]
}