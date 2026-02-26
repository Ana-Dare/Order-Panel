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
    setTerm("");
    console.log("Pedido criado", term);
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  return (
    <InputFieldStyled>
      <input
        placeholder="Qual o seu pedido?"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyboard}
      />
      <SendButton onClick={handleCreate} type="submit">
        <img src="/public/send.png" alt="enviar" width={36} height={36} />
      </SendButton>
    </InputFieldStyled>
  );
};

export default InputField;
