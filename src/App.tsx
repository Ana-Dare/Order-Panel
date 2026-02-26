//app renderiza tudo
import { GlobalStyle } from "./style/reset";
import Home from "./screen/home";
import { OrderProvider } from "./context/OrderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
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
