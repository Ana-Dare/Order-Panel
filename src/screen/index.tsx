import Colunm from "../components/colunm";
import {
  ButtonStyled,
  ButtonWrapper,
  ListStyled,
  OrderStyled,
} from "../components/colunm/Colunm.styled";
import InputField from "../components/InputField";
import SideBar from "../components/sidebar";
import useDeleteOrder from "../hooks/useDeleteOrder";
import useListOrder from "../hooks/useListOrder";
import { deleteOrder } from "../services/deleteOrder";

const Screen = () => {
  const { data, isLoading, error } = useListOrder();
  const { mutation: deleteMutation } = useDeleteOrder();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  return (
    <>
      <SideBar />
      <div
        style={{
          width: "80%",
          height: "60%",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          margin: "2rem",
          gap: "1rem",
        }}
      >
        <Colunm color="#f18651e7" title="Novos">
          <h1>NOVOS</h1>
          <ListStyled>
            {data?.new.map((order) => (
              <li key={order.id}>
                <OrderStyled>
                  <p> {order.description}</p>
                  <ButtonWrapper>
                    <ButtonStyled onClick={() => handleDelete(order.id)}>
                      <img
                        src="/cancel.png"
                        alt="cancelar"
                        width={24}
                        height={24}
                      />
                    </ButtonStyled>
                    <ButtonStyled>
                      <img
                        src="/arrow.png"
                        alt="próximo"
                        width={24}
                        height={24}
                      />
                    </ButtonStyled>
                  </ButtonWrapper>
                </OrderStyled>
              </li>
            ))}
          </ListStyled>
        </Colunm>
        <Colunm color="#af5d34e7" title="Novos">
          <h1>PREPARANDO</h1>
        </Colunm>
        <Colunm color="#dc6022e7" title="Novos">
          <h1>FINALIZADO</h1>
        </Colunm>
      </div>
      <InputField />
    </>
  );
};

export default Screen;
