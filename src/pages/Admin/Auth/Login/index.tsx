import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { useForm } from 'react-hook-form';

import './style.css';

const Login = () => {
  //tipo dos dados do formulário
  type FormData = {
    username: string;
    password: string;
  };


  //register = registra os inputs dos formulário
  //handleSubmit = evento do submit do formulário


  //hook para monitorar o formulário
  const { register, handleSubmit } = useForm<FormData>();

  //recebe o tipo do formulário
  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {/* evento do submit sendo monitorado pelo evento do hook */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            //registra input para ser monitorado pelo hook(deve ser igual ao name)
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register('password')}
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <button className="login-submit">
          <ButtonIcon  text="Fazer login" />
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
