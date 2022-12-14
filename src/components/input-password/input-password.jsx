import { Input } from '@alfalab/core-components-input';

export const InputPassword = ({ register, error }) => (
  <div>
    <p  className='input-title'>Введите пароль</p>
    <Input
      {...register('password', { required: true })}
      className='input'
      role='input'
      placeholder='Пароль'
      error={error && error.message}
      data-test-id='input-password'
    />
  </div>
);