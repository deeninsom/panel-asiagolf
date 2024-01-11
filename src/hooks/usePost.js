import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

function usePost({ module, headers }) {
  const client = useQueryClient();

  const mutation = useMutation(
    (values) => {

      // console.log('test value' + JSON.stringify(values))

      return api.post(`${module}`, values, { headers: headers });
    },
    {
      onSuccess: (response) => {
        if (response !== null) {
          client.invalidateQueries(module);
        }
      },
      onError: (err) => {},
    }
  );
  return mutation;
}

export default usePost;
