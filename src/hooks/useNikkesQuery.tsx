import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNikkes() {
  const { data } = await axios.get("http://localhost:3000/nikke/");
  return data;
}

export const useNikkesQuery = () => useQuery(["nikkes"], fetchNikkes);
