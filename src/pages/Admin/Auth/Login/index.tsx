import { Link, useHistory } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import './style.css';
import { getTokenData, requestBackendLogin, saveAuthData } from '../../../../http/requests';
import { useState } from 'react';
import { AuthContext } from '../../../../AuthContext';

const Login = () => {

  //instancia o estado de autenticação global da aplicação
  const { setAuthContextData } = useContext(AuthContext);

  //monitora o erro de login
  const [error, setError] = useState(false);

  //hook para fazer o redirecionamento de rotas na aplicação
  const history = useHistory();

  //tipo dos dados do formulário
  type FormData = {
    username: string;
    password: string;
  };

  //hook para monitorar o formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //register = registra os inputs dos formulário
  //handleSubmit = evento do submit do formulário

  //recebe o tipo do formulário
  const onSubmit = (formData: FormData) => {
    //retorna uma promisse(assync)
    requestBackendLogin(formData)
      .then((response) => {
        //passa dados de autenticação para serem salvos no LocalStorage
        saveAuthData(response.data);
        setError(false);

        //altera o estado global da aplicação
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });

        //faz redirecionamento para a página de Login
        history.push('/admin');
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {/* evento do submit sendo monitorado pelo evento do hook */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              Falha ao efetuar o Login, verifique suas credênciais
            </div>
          )}
          <input
            //registra input para ser monitorado pelo hook(deve ser igual ao name)
            {...register('username', {
              required: 'Campo requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            //se houver erro no input username, contornar input
            className={`form-control base-input ${
              errors.username ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="username"
          />
          {/* mensagem de errro monitorada pelo Hook Form */}
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>

        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo requerido',
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="Password"
            name="password"
          />
          {/* mensagem de errro monitorada pelo Hook Form */}
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>

        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <button className="login-submit">
          <ButtonIcon text="Fazer login" />
        </button>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
