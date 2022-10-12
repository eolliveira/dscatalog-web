import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { useForm } from 'react-hook-form';

import './style.css';
import { getAuthData, requestBackendLogin, saveAuthData } from '../../../../http/requests';
import { useState } from 'react';

const Login = () => {
  //monitora o erro de login
  const [error, setError] = useState(false);

  //tipo dos dados do formulário
  type FormData = {
    username: string;
    password: string;
  };

  //register = registra os inputs dos formulário
  //handleSubmit = evento do submit do formulário

  //hook para monitorar o formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //recebe o tipo do formulário
  const onSubmit = (formData: FormData) => {
    //retorna uma promisse(assync)
    requestBackendLogin(formData)
      .then((response) => {
        //passa dados de autenticação para serem salvos no LocalStorage
        saveAuthData(response.data);
        setError(false);
        console.log('SUCESSO');
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
