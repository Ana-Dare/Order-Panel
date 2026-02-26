import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder } from "../services/deleteOrder";

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: (data) => {
      console.log("Pedido deletado", data);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error("Erro ao deletar pedido", error);
    },
  });
  return {
    mutation,
  };
}
