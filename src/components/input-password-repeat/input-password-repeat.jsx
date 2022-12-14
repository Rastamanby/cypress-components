import { useState } from 'react';
import { PasswordInput } from '@alfalab/core-components/password-input';

export const InputPasswordRepeat = ({ register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div className='input-title'>Повторите пароль</div>
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
        dataTestId='input-password-repeat'
        block
      />
    </>
  );
}