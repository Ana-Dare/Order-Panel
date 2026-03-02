import { useState } from "react";
import { useUserAuthContext } from "../../context/userAuthContext";
import { FormStyled, InputFormStyled, WrapperButtonForm } from "./Form.styled";
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
  const navigate = useNavigate();
  const loginUser = () => {
    const success = handleLogin({ user, password });
    if (success) {
      setIsRegistered(true);
      navigate("/dashboard");
    }
  };
  return (
    <>
      {isLogin ? (
        <FormStyled>
          <p>Conecte-se</p>
          <InputFormStyled>
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <input
              type="text"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFormStyled>
          <WrapperButtonForm>
            <button onClick={loginUser}>Entrar</button>
            <button onClick={() => setIsLogin(false)}>
              Não é cadastrado? Registre-se
            </button>
          </WrapperButtonForm>
        </FormStyled>
      ) : (
        <FormStyled>
          <p>Cadastre-se-se</p>
          <InputFormStyled>
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </InputFormStyled>
          <InputFormStyled>
            <input
              type="text"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFormStyled>
          <WrapperButtonForm>
            <button onClick={() => handleRegister({ user, password })}>
              Cadastrar
            </button>
            <button onClick={() => setIsLogin(true)}>
              Já é cadastrado? Entre aqui
            </button>
          </WrapperButtonForm>
        </FormStyled>
      )}
    </>
  );
};

export default Form;
