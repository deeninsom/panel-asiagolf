import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

function useFetch({ module, enabled }) {
  const query = useQuery({
    queryKey: [module],
    queryFn: () => api.get(`${module}`),
    enabled: enabled,
  });

  return {
    ...query,
    items: query?.data?.data || [],
  };
}

export default useFetch;
