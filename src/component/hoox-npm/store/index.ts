import createHoox from 'hooxjs';

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
