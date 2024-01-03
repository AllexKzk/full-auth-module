import { createContext } from 'react';

interface IAuth {
  username: string | undefined
}

const AuthContext = createContext<IAuth>({
  username: undefined
});

export { AuthContext, IAuth }