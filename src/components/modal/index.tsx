import { ModalButtonStyled, ModalStyled, ModalWrapper } from "./Modal.styled";

interface IModal {
  orderId: string;
  onDelete: (id: string) => void;
  onCancel: () => void;
}

export interface IModalStyled {
  $variant: "cancel" | "confirm";
}

const Modal = ({ onCancel, onDelete, orderId }: IModal) => {
  return (
    <ModalStyled>
      <p>Deseja excluir o pedido?</p>
      <ModalWrapper>
        <ModalButtonStyled onClick={onCancel} $variant="cancel">
          Cancelar
        </ModalButtonStyled>
        <ModalButtonStyled onClick={() => onDelete(orderId)} $variant="confirm">
          Confirmar
        </ModalButtonStyled>
      </ModalWrapper>
    </ModalStyled>
  );
};

export default Modal;
