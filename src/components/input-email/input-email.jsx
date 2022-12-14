import { Input } from '@alfalab/core-components-input';

export const InputEmail = ({ register, error, viewEmail }) => (
  <>
    <div className='input-title'>Введите Email</div>
    <Input
      {...register('email')}
      className='input'
      role='input'
      placeholder='Email'
      error={error && error.message}
      dataTestId='input-email'
      block
    />
  </>
);