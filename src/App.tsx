//app renderiza tudo
import { GlobalStyle } from "./style/reset";
import { OrderProvider } from "./context/OrderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserAuthProvider } from "./context/userAuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screen/home";
import Login from "./screen/login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

//ele está se conectando
//e vendo quando a uma nova conexão
//

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <UserAuthProvider>
        <QueryClientProvider client={queryClient}>
          <OrderProvider>
            <GlobalStyle />
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Home />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </BrowserRouter>
          </OrderProvider>
        </QueryClientProvider>
      </UserAuthProvider>
    </>
  );
}

export default App;
