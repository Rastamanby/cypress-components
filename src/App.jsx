import { Button } from '@alfalab/core-components-button';
import { Input } from '@alfalab/core-components-input';
import { Grid } from '@alfalab/core-components/grid';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Grid.Col>
        <Input className='input' role='input' placeholder='Текст' />
        <Button className='button' role='button' view='primary'>Проверка</Button>
      </Grid.Col>
    </div>
  );
}

export default App;
