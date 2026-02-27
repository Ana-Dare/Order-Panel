//app renderiza tudo
import { GlobalStyle } from "./style/reset";
import Home from "./screen/home";
import { OrderProvider } from "./context/OrderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//ele está se conectando
//e vendo quando a uma nova conexão
//

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
