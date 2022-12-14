import { Button } from '@alfalab/core-components-button';

export const ButtonTest = ({isValid}) => (
  <Button
    className='button'
    role='button'
    view='secondary'
    data-test-id='button-submit'
    type='submit'
    disabled={!isValid}
    onClick={console.log(isValid)}
  >
    Проверка
  </Button>
);
