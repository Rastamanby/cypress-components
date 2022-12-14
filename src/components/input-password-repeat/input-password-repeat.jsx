import { useState } from 'react';
import { PasswordInput } from '@alfalab/core-components/password-input';

export const InputPasswordRepeat = ({ register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div>
      <p className='input-title'>Повторите пароль</p>
      <PasswordInput
        {...register('passwordRepeat', { required: true })}
        className='input'
        role='input'
        placeholder='Пароль повторно'
        error={error && error.message}
        passwordVisible={passwordVisible}
        onPasswordVisibleChange={visible => {
          setPasswordVisible(visible);
        }}
        data-test-id='input-password-repeat'
      />
    </div>
  );
}