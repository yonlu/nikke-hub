import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNikkes(filters?: any) {
  const { data } = await axios.get("http://localhost:3000/nikke/");
  return data;
}

export const useNikkesQuery = (filters: any) =>
  useQuery(["nikkes"], () => fetchNikkes(filters));
