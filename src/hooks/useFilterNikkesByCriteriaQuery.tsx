import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchFilterNikkesByCriteria(filters: any) {
  const { data } = await axios.get("http://localhost:3000/filter/nikke", {
    params: {
      rarity: filters?.rarity ? filters?.rarity[0] : null,
      burst: filters?.burst ? filters.burst[0] : null,
      code: filters?.code ? filters.code[0] : null,
      weapon: filters?.weapon ? filters.weapon[0] : null,
    },
  });
  return data;
}

export const useFilterNikkesByCriteriaQuery = (filters: any) =>
  useQuery(["filteredNikkes", filters], () =>
    fetchFilterNikkesByCriteria(filters)
  );
