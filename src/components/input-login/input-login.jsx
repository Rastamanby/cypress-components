import { Input } from '@alfalab/core-components-input';

export const InputLogin = ({ register, error }) => (
  <>
    <div className='input-title'>Введите логин</div>
    <Input
      {...register('login', { required: true })}
      className='input'
      role='input'
      placeholder='Логин'
      error={error && error.message}
      dataTestId='input-login'
      block
    />
  </>
);