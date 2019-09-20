const getRandomColor: () => string = () => {
  const letters = Math.random().toString(16);
  return `#${letters.slice(2, 8)}`;
};

export default getRandomColor;
