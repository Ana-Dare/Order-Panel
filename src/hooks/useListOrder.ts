import {
  QueryClient,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import { listOrders } from "../services/listOrder";
import type { IOrder } from "../interfaces/IOrder";
import { useEffect } from "react";
import { socket } from "../socket";
import { updateOrder } from "../services/updateOrder";

//interface necessária para tipar o retorno corretamente
interface GroupedOrders {
  new: IOrder[];
  preparing: IOrder[];
  finished: IOrder[];
}

function useListOrder() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () => listOrders(),
    retry: 1,
    select: (all) => {
      return {
        new: all.filter((order) => order.state === "novo"),
        preparing: all.filter((order) => order.state === "preparando"),
        finished: all.filter((order) => order.state === "finalizado"),
      };
    },
  });

  useEffect(() => {
    const updateList = () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    };
    socket.on("update_orders", updateList);
    return () => {
      socket.off("update_orders", updateList);
    };
  }, [queryClient]);
  return { data, isLoading, error };
}

export default useListOrder;
