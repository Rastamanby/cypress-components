import { Input } from '@alfalab/core-components-input';

export const InputPasswordRepeat = ({ register, error }) => (
  <div>
    <p className='input-title'>Повторите пароль</p>
    <Input
      {...register('passwordRepeat', { required: true })}
      className='input'
      role='input'
      placeholder='Пароль повторно'
      error={error && error.message}
      data-test-id='input-password-repeat'
    />
  </div>
);