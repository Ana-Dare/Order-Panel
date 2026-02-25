import { useOrderContext } from "../../context/OrderContext";
import useCreateOrder from "../../hooks/useCreateOrder";
import { InputFieldStyled, SendButton } from "./InputField.styled";

//ao clicar no botão preciso enviar o que foi escrito
// no onClick chamo o hook que envia o term para a api

const InputField = () => {
  const { setTerm, term } = useOrderContext();
  const { mutation } = useCreateOrder();

  const handleCreate = () => {
    mutation.mutate({ description: term });
    console.log("Pedido criado", term);
  };

  return (
    <InputFieldStyled>
      <input
        placeholder="Qual o seu pedido?"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <SendButton onClick={handleCreate}>
        <img src="/public/send.png" alt="enviar" width={36} height={36} />
      </SendButton>
    </InputFieldStyled>
  );
};

export default InputField;
