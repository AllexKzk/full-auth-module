import React = require('react');
import { useState } from 'react';
import { AuthContext, IAuth } from './AuthContext';

import Auth from '../../pages/auth';
import { redirect } from 'react-router-dom';

export default function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<IAuth>({
    username: undefined
  });

  return (
    <AuthContext.Provider value={ user }>
      {children}
    </AuthContext.Provider>
  );
};