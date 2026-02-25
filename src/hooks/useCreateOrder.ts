import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../services/createOrder";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      console.log("Pedido criado", data);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error("Erro ao criar pedido", error);
    },
  });
  return {
    mutation,
  };
}

export default useCreateOrder;
