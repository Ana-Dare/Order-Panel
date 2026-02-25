import { createContext, useContext, useState } from "react";

interface IOrderContext {
  term: string;
  setTerm: (t: string) => void;
}

const OrderContext = createContext<IOrderContext | null>(null);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [term, setTerm] = useState("");
  return (
    <OrderContext.Provider value={{ term, setTerm }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error(
      "useOrderContext deve ser usado dentro de um OrderProvider"
    );
  }
  return context;
};