import { Input } from '@alfalab/core-components-input';

export const InputTel = ({ register, error }) => (
  <div>
    <p className='input-title'>Введите телефон</p>
    <Input
      {...register('tel', { required: true, maxLength: 10 })}
      className='input'
      role='input'
      placeholder='Телефон'
      error={error && error.message}
      data-test-id='input-password-repeat'
    />
  </div>
);