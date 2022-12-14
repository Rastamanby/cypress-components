import { useState } from 'react';
import { PasswordInput } from '@alfalab/core-components/password-input';

export const InputPassword = ({ register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div className='input-title'>Введите пароль</div>
      <PasswordInput
        {...register('password', { required: true })}
        className='input'
        role='input'
        placeholder='Пароль'
        error={error && error.message}
        passwordVisible={passwordVisible}
        onPasswordVisibleChange={visible => {
          setPasswordVisible(visible);
        }}
        dataTestId='input-password'
        block
      />
    </>
  );
}