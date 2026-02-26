import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../services/updateOrder";
import type { IUpdateOrder } from "../interfaces/IOrder";

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, stateOrder: state }: IUpdateOrder) =>
      updateOrder({ id, stateOrder: state }),
    onSuccess: (data) => {
      console.log("Pedido atualizado com seucesso", data);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error("Erro ao atualizar pedido", error);
    },
  });
  return {
    mutation,
  };
}
