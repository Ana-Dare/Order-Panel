import { createContext, useContext, useState } from "react";

interface IUserAuthContext {
  user: string;
  setUser: (t: string) => void;
  password: string;
  setPassword: (t: string) => void;
  isRegistered: boolean;
  setIsRegistered: (t: boolean) => void;
  //   loading: boolean;
  //   setLoading: (t: boolean) => void;
}

const UserAuthContext = createContext<IUserAuthContext | null>(null);

export const UserAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  //const [loading, setLoading] = useState(true);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        isRegistered,
        setIsRegistered,
        // loading,
        // setLoading,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error(
      "useUserAuthContext deve ser usado dentro de um UserAuthProvider",
    );
  }
  return context;
};
