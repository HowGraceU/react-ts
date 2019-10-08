import createHoox from '../hoox';

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
