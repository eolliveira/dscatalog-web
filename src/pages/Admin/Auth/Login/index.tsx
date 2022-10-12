import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { useForm } from 'react-hook-form';

import './style.css';
import { requestBackendLogin } from '../../../../http/requests';

const Login = () => {
  //tipo dos dados do formulário
  type FormData = {
    username: string;
    password: string;
  };

  //register = registra os inputs dos formulário
  //handleSubmit = evento do submit do formulário

  //hook para monitorar o formulário
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  //recebe o tipo do formulário
  const onSubmit = (formData: FormData) => {
    //retorna uma promisse(assync)
    requestBackendLogin(formData)
      .then((response) => {
        console.log('SUCESSO');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {/* evento do submit sendo monitorado pelo evento do hook */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            //registra input para ser monitorado pelo hook(deve ser igual ao name)
            {...register('username', {
              required: "Campo requerido"
            })}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
          {/* mensagem de errro monitorada pelo Hook Form */}
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>

        <div className="mb-2">
          <input
            {...register('password', {
              required: "Campo requerido"
            })}
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
          {/* mensagem de errro monitorada pelo Hook Form */}
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
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
