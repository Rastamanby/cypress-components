import { Input } from '@alfalab/core-components-input';

export const InputLogin = ({ register, error }) => (
  <div>
    <p  className='input-title'>Введите логин</p>
  <Input
    {...register('login', { required: true })}
    className='input'
    role='input'
    placeholder='Логин'
    error={error && error.message}
    data-test-id='input-login'
  />
  </div>
);