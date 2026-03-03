import { useState } from "react";
import { useUserAuthContext } from "../../context/userAuthContext";
import {
  LinkButtonSTyled,
  FormStyled,
  InputFormStyled,
  WrapperButtonForm,
  AuthButtonStyled,
} from "./Form.styled";
import { handleLogin, handleRegister } from "../../services/userAuth";
import { useNavigate } from "react-router-dom";

//criar um estado de login
//se ele for true mostrar os dados de login no form
//se ele for false mostrar os dados de registro no form
//ao clicar no link para alternar para cadastro, tornar falso o estado

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user, setUser, password, setPassword, setIsRegistered } =
    useUserAuthContext();

  const loginUser = () => {
    const success = handleLogin({ user, password });
    if (success) {
      setIsRegistered(true);
    }
  };

  const registerUser = () => {
    if (user === "" && password === "") {
    }
    const sucess = handleRegister({ user, password });
    if (sucess) {
      setUser("");
      setPassword("");
      setIsLogin(true);
    }
  };
  return (
    <>
      {isLogin ? (
        <FormStyled>
          <img src="/cook.png" alt="cozinheiro" width={100} height={100} />
          <InputFormStyled>
            <img src="/user.svg" alt="user" />
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <img src="/lock.svg" alt="user" />
            <input
              required
              type="text"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFormStyled>
          <WrapperButtonForm>
            <AuthButtonStyled onClick={loginUser}>ENTRAR</AuthButtonStyled>
            <LinkButtonSTyled onClick={() => setIsLogin(false)}>
              Não é cadastrado? Registre-se
            </LinkButtonSTyled>
          </WrapperButtonForm>
        </FormStyled>
      ) : (
        <FormStyled>
          <img src="/cook.png" alt="cozinheiro" width={100} height={100} />
          <InputFormStyled>
            <img src="/user.svg" alt="user" />
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <img src="/lock.svg" alt="user" />
            <input
              required
              type="text"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFormStyled>
          <WrapperButtonForm>
            <AuthButtonStyled onClick={registerUser}>
              CADASTRAR
            </AuthButtonStyled>
            <LinkButtonSTyled onClick={() => setIsLogin(true)}>
              Já é cadastrado? Entre aqui
            </LinkButtonSTyled>
          </WrapperButtonForm>
        </FormStyled>
      )}
    </>
  );
};

export default Form;
