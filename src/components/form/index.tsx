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

//mostrar toast de cadastro bem sucedido
//definir tempo para ele ficar na tela

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const { user, setUser, password, setPassword, setIsRegistered } =
    useUserAuthContext();

  const handlePassword = () => {
    setIsPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const loginUser = () => {
    const success = handleLogin({ user, password });
    if (success) {
      setIsRegistered(true);
      navigate("/dashboard");
    }
  };

  const registerUser = () => {
    let formattedUser = user.trim();
    let formattedPassword = password.trim();
    const sucess = handleRegister({
      user: formattedUser,
      password: formattedPassword,
    });
    if (sucess) {
      setUser("");
      setPassword("");
      setIsLogin(true);
    }
  };
  return (
    <>
      {isLogin ? (
        <FormStyled onSubmit={(e) => e.preventDefault()}>
          <img src="/cook.png" alt="cozinheiro" width={100} height={100} />
          <InputFormStyled>
            <img src="/user.svg" alt="user" />
            <input
              autoComplete="username"
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <img src="/lock.svg" alt="user" />
            <input
              type={isPassword ? "password" : "text"}
              autoComplete="current-password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPassword ? (
              <img
                onClick={handlePassword}
                src="/invisible.png"
                alt="invisivel"
                width={20}
                height={20}
              />
            ) : (
              <img
                onClick={handlePassword}
                src="/visivel.png"
                alt="visivel"
                width={20}
                height={20}
              />
            )}
          </InputFormStyled>
          <WrapperButtonForm>
            <AuthButtonStyled onClick={loginUser}>ENTRAR</AuthButtonStyled>
            <LinkButtonSTyled
              onClick={() => setIsLogin((prev) => !prev)}
              type="button"
            >
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
              autoComplete="username"
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <img src="/lock.svg" alt="user" />
            <input
              type={isPassword ? "password" : "text"}
              autoComplete="new-password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPassword ? (
              <img
                onClick={handlePassword}
                src="/invisible.png"
                alt="invisivel"
                width={20}
                height={20}
              />
            ) : (
              <img
                onClick={handlePassword}
                src="/visivel.png"
                alt="visivel"
                width={20}
                height={20}
              />
            )}
          </InputFormStyled>
          <WrapperButtonForm>
            <AuthButtonStyled onClick={registerUser}>
              CADASTRAR
            </AuthButtonStyled>
            <LinkButtonSTyled
              onClick={() => setIsLogin((prev) => !prev)}
              type="button"
            >
              Já é cadastrado? Entre aqui
            </LinkButtonSTyled>
          </WrapperButtonForm>
        </FormStyled>
      )}
    </>
  );
};

export default Form;
