import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@alfalab/core-components/grid';

import { InputLogin } from './components/input-login/input-login';
import { InputTel } from './components/input-tel/input-tel';
import { InputEmail } from './components/input-email/input-email';
import { InputPassword } from './components/input-password/input-password';
import { InputPasswordRepeat } from './components/input-password-repeat/input-password-repeat';
import { ButtonTest } from './components/button-test/button-test';

import { validatoinSchema } from "./utils/validationSchema";

import './App.css';

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validatoinSchema)
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App" data-test-id='app'>
      <Grid.Col>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLogin
            register={register}
            error={errors.login}
          />
          <InputTel
            register={register}
            error={errors.tel}
          />
          <InputEmail
            register={register}
            error={errors.email}
            viewEmail={!!watch('email')}
          />
          <InputPassword
            register={register}
            error={errors.password}
          />
          <InputPasswordRepeat
            register={register}
            error={errors.passwordRepeat}
          />
          <ButtonTest />
        </form>
      </Grid.Col>
    </div>
  );
}

export default App;
