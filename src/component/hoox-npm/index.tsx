import * as React from 'react';
import {
  getHoox,
  useHoox,
  setHoox,
  // resetHoox,
  // createContainer,
  Provider,
} from './store';

function Child() : JSX.Element {
  const [hoox] = useHoox();

  return (
    <>
      <div>{hoox.count}</div>
      <button type="button" onClick={() => setHoox({ count: hoox.count + 1 })}>+</button>
      <button type="button" onClick={() => console.log(getHoox())}>log count</button>
    </>
  );
}

function HooxTest(): JSX.Element {
  return (
    <Provider>
      <Child />
    </Provider>
  );
}

export default HooxTest;
