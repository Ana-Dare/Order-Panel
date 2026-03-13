import { useEffect, useState } from "react";
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
import { ToastStyled } from "../components/toast/Toast.styled";
import { socket } from "../socket";

const Home = () => {
  const { data, isLoading, error } = useListOrder();
  const { mutation: deleteMutation } = useDeleteOrder();
  const { mutation: updateMutation } = useUpdateOrder();

  const [isOpenModal, setOpenModal] = useState(false);
  const [selectOrderId, setSelectOrderId] = useState<string | null>(null);
  const [isToast, setIsToast] = useState(true);

  // useEffect(() => {
  //   socket.on("user_connected", () => {
  //     setIsToast(true);
  //   });
  //   const timer = setTimeout(() => {
  //     setIsToast(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  //   return () => {
  //     socket.off("user_connected");
  //   };
  // }, []);

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
        {/* <ToastStyled hidden={isToast}>
          <p>Novo usuário conectado</p>
        </ToastStyled> */}
        <Colunm color="#EB5E28" title="">
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
                        width={30}
                        height={30}
                      />
                    </ButtonStyled>
                    <ButtonStyled
                      onClick={() => handleUpdate(order.id, "preparando")}
                    >
                      <img
                        src="/arrow.png"
                        alt="próximo"
                        width={30}
                        height={30}
                      />
                    </ButtonStyled>
                  </ButtonWrapper>
                </OrderStyled>
              </li>
            ))}
          </ListStyled>
        </Colunm>
        <Colunm color="#F27F34" title="">
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
                        src="/arrow2.png"
                        alt="próximo"
                        width={30}
                        height={30}
                      />
                    </ButtonStyled>
                  </ButtonWrapper>
                </OrderStyled>
              </li>
            ))}
          </ListStyled>
        </Colunm>
        <Colunm color="#F9A03F" title="">
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
