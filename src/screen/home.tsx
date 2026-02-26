import { useState } from "react";
import Colunm from "../components/colunm";
import {
  ButtonStyled,
  ButtonWrapper,
  ListStyled,
  OrderStyled,
} from "../components/colunm/Colunm.styled";
import InputField from "../components/InputField";
import SideBar from "../components/sidebar";
import { useDeleteOrder } from "../hooks/useDeleteOrder";
import useListOrder from "../hooks/useListOrder";
import { useUpdateOrder } from "../hooks/useUpdateOrder";
import type { IOrderState } from "../interfaces/IOrder";
import { OverlayStyled } from "../components/modal/Modal.styled";
import Modal from "../components/modal";

const Home = () => {
  const { data, isLoading, error } = useListOrder();
  const { mutation: deleteMutation } = useDeleteOrder();
  const { mutation: updateMutation } = useUpdateOrder();

  const [isOpenModal, setOpenModal] = useState(false);
  const [selectOrderId, setSelectOrderId] = useState<string | null>(null);

  const closeModal = () => setOpenModal(false);

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
    setOpenModal(false);
    setSelectOrderId(null);
  };

  const handleUpdate = (id: string, state: IOrderState) => {
    updateMutation.mutate({ id, stateOrder: state });
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
                    <ButtonStyled
                      onClick={() => {
                        setSelectOrderId(order.id);
                        setOpenModal(true);
                      }}
                    >
                      <img
                        src="/cancel.png"
                        alt="cancelar"
                        width={24}
                        height={24}
                      />
                    </ButtonStyled>
                    <ButtonStyled
                      onClick={() => handleUpdate(order.id, "preparando")}
                    >
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
          <ListStyled>
            {data?.preparing.map((order) => (
              <li key={order.id}>
                <OrderStyled>
                  <p> {order.description}</p>
                  <ButtonWrapper>
                    <ButtonStyled
                      onClick={() => handleUpdate(order.id, "finalizado")}
                    >
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
        <Colunm color="#dc6022e7" title="Novos">
          <h1>FINALIZADO</h1>
          <ListStyled>
            {data?.finished.map((order) => (
              <li key={order.id}>
                <OrderStyled>
                  <p> {order.description}</p>
                  <ButtonWrapper>
                    <ButtonStyled onClick={() => handleDelete(order.id)}>
                      <img
                        src="/shop.png"
                        alt="cancelar"
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
        {isOpenModal && selectOrderId && (
          <OverlayStyled>
            <Modal
              onCancel={closeModal}
              onDelete={handleDelete}
              orderId={selectOrderId}
            ></Modal>
          </OverlayStyled>
        )}
      </div>
      <InputField />
    </>
  );
};

export default Home;
