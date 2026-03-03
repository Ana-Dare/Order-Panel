import type { IUser } from "../interfaces/IUser";

const getUser = (): IUser[] | null => {
  const userString = localStorage.getItem("users");
  if (!userString) return [];
  try {
    return JSON.parse(userString) as IUser[];
  } catch {
    return [];
  }
};

export const handleLogin = ({ user, password }: IUser) => {
  const users = getUser();
  const existingUser =
    users && users.find((u) => u.user === user && u.password === password);
  if (existingUser) {
    console.log("Usuário logado");
    return true;
  } else {
    console.log("Não foi possível encontrar o usuário na storage");
    return false;
  }
};

export const handleRegister = ({ user, password }: IUser) => {
  const newUser = { user, password };
  const users = getUser();
  const existingUser = users && users.find((u) => u.user === user);
  if (existingUser) {
    console.log("Esse usuário já esta cadastrado");
    return false;
  }
  if (user === "" || password === "") {
    console.log("Algum campo está vazio");
    return false;
  }
  users?.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  console.log("Usuário salvo na Storage");
  return true;
};
