import * as React from 'react';
import { Button } from 'antd';

import {
  // getHoox,
  useHoox,
  // setHoox,
  // resetHoox,
  // createContainer,
  Provider,
} from './store';


function Child(): JSX.Element {
  const [hoox, setHoox] = useHoox();

  return (
    <>
      <ShowCount />
      <Button type="primary" onClick={() => setHoox({ count: hoox.count + 1 })}>+</Button>
    </>
  );
}

function ShowCount(): JSX.Element {
  const [{ count }] = useHoox();

  return <div>{count}</div>;
}

function HooxTest(): JSX.Element {
  return (
    <Provider>
      <Child />
    </Provider>
  );
}

export default HooxTest;
