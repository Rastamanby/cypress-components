import { Button } from '@alfalab/core-components-button';

export const ButtonTest = ({isValid}) => (
  <Button
    className='button'
    role='button'
    view="primary"
    type='submit'
    disabled={!isValid}
    dataTestId='button-submit'
    block
  >
    Проверка
  </Button>
);
