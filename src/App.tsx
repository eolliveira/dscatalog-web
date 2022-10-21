import './assets/styles/custom.scss';
import './App.css';
import Routes from './Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    ///provisiona o component do estado global para toda a aplicação, informando o estado
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />;
    </AuthContext.Provider>
  );
}

export default App;
