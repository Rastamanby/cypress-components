import { Input } from '@alfalab/core-components-input';

export const InputTel = ({ register, error }) => (
  <>
    <div className='input-title'>Введите телефон</div>
    <Input
      {...register('tel', { required: true, maxLength: 10 })}
      className='input'
      role='input'
      placeholder='Телефон'
      error={error && error.message}
      dataTestId='input-password-repeat'
      block
    />
  </>
);