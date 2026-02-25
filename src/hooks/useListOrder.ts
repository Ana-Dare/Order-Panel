import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { listOrders } from "../services/listOrder";
import type { IOrder } from "../interfaces/IOrder";

//interface necessária para tipar o retorno corretamente
interface GroupedOrders {
  new: IOrder[];
  preparing: IOrder[];
  finished: IOrder[];
}

function useListOrder(): UseQueryResult<GroupedOrders> {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => listOrders(),
    select: (all) => {
      return {
        new: all.filter((order) => order.state === "novo"),
        preparing: all.filter((order) => order.state === "preparando"),
        finished: all.filter((order) => order.state === "finalizado"),
      };
    },
  });
}

export default useListOrder;
