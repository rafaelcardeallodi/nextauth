import { createContext, ReactNode } from "react";

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

const isAuthenticated = false;

async function signIn({email, password}: SignInCredentials){
  console.log({email, password})
}

export function AuthProvider({ children }: AuthProviderProps){
  return(
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}