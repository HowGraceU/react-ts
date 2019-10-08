import React, {
  createContext, useState, useMemo, useContext,
} from 'react';

interface Hoox<State> {
  getHoox: () => State
  setHoox: Patch<State>
  resetHoox: Dispatch<State>
  useHoox: StateOperator<State>
  createContainer: (
    Component: React.FC,
    initialState?: State
  ) => React.FC
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
  children: React.ReactNode
}

export default function createHoox<State>(state: State): Hoox<State> {
  const StateContext = createContext(state);
  let stateRef: State;
  const getHoox = () => stateRef;
  let setHoox: Patch<State>;
  let resetHoox: Dispatch<State>;

  function Provider({ initialState = {} as State, children }: ProviderProps<State>): JSX.Element {
    const [hooxState, setState] = useState({
      ...state,
      ...initialState,
    });

    stateRef = hooxState;

    // init setHoox and resetHoox
    useMemo(() => {
      setHoox = (patch) => setState((prevState) => ({
        ...prevState,
        ...(patch instanceof Function ? patch(prevState) : patch),
      }));

      resetHoox = setState;
    }, []);

    return (
      <StateContext.Provider value={hooxState}>
        {children}
      </StateContext.Provider>
    );
  }

  function createContainer(Component: React.FC, initialState?: State) {
    return function HookStoreContainer<Props = {}>(props: Props) {
      return (
        <Provider initialState={initialState}>
          <Component {...props} />
        </Provider>
      );
    };
  }

  return {
    getHoox,
    setHoox: (newState) => setHoox(newState),
    resetHoox: (newState) => resetHoox(newState),
    useHoox: () => {
      const hooxState = useContext(StateContext);
      return [hooxState, setHoox, resetHoox];
    },
    createContainer,
    Provider,
  };
}
