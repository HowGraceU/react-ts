import * as React from 'react';
import createHoox from './hoox';

const state = {
  count: 1,
};

export const {
  getHoox,
  useHoox,
  setHoox,
  resetHoox,
  createContainer,
  Provider,
} = createHoox(state);

function App(): JSX.Element {
  return (
    <>
      <div>123</div>
    </>
  );
}

export default App;
