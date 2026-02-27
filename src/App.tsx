//app renderiza tudo
import { GlobalStyle } from "./style/reset";
import Home from "./screen/home";
import { OrderProvider } from "./context/OrderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { socket } from "./socket";

const queryClient = new QueryClient();

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<unknown>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log("A conexão foi estabelecida");
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("A conexão foi desconectada");
    }

    function onFooEvent(value: unknown) {
      setFooEvents((previous: any) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OrderProvider>
          <GlobalStyle />
          <Home />
        </OrderProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
