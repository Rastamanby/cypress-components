import { useState } from 'react';
import { PasswordInput } from '@alfalab/core-components/password-input';

export const InputPassword = ({ register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div>
      <p className='input-title'>Введите пароль</p>
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
        data-test-id='input-password'
      />
    </div>
  );
}