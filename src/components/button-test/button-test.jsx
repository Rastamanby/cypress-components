import { Button } from '@alfalab/core-components-button';

export const ButtonTest = () => (
  <Button
    className='button'
    role='button'
    view='secondary'
    data-test-id='button-submit'
    type='submit'
  >
    Проверка
  </Button>
);
