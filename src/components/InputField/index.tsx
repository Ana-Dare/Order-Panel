import { InputFieldStyled, SendButton } from "./InputField.styled";

const InputField = () => {
  return (
    <InputFieldStyled>
      <input placeholder="Qual o seu pedido?" />
      <SendButton>
        <img src="/public/send.png" alt="enviar" width={36} height={36} />
      </SendButton>
    </InputFieldStyled>
  );
};

export default InputField;
