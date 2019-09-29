import React, { createContext, ReactNode } from 'react';

interface Hoox<State> {
  getHoox: () => State
  setHoox: Patch<State>
  resetHoox: Dispatch<State>
  useHoox: StateOperator<State>
  createContainer: (
    Component: React.FunctionComponent<{}>,
    initialState?: State
  ) => <Props = {}>(props: Props) => JSX.Element
  Provider: (props: ProviderProps<State>) => JSX.Element
}

type Patch<State> = (
  patch: Partial<State> | ((preState: State) => Partial<State>)
) => void;

type Dispatch<State> = (
  state: State | ((prevState: State) => State)
) => void;

type StateOperator<State> = () => [State, Patch<State>, Dispatch<State>];

export interface ProviderProps<State> {
  initialState?: State
  children: ReactNode
}

export default function createHoox<State>(state: State): Hoox<State> {
  const a = createContext({});

  return {
    getHoox: () => state,
    setHoox: () => { },
    resetHoox: () => { },
    useHoox: () => [state, () => { }, () => { }],
    createContainer: () => () => <div />,
    Provider: () => <a.Provider value={{}} />,
  };
}
