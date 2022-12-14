import { Input } from '@alfalab/core-components-input';

export const InputEmail = ({ register, error, viewEmail }) => (
  <div>
    <p className='input-title'>Введите Email</p>
    <Input
      {...register('email')}
      className='input'
      role='input'
      placeholder='Email'
      error={error && error.message}
      data-test-id='input-email'
    />
  </div>
);