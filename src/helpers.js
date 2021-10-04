const choice = (items) => {
  const randIndx = Math.floor(Math.random() * items.length);
  return items[randIndx];
};

const remove = (items, item) => {
  for (let i of items) {
    if (i === item) {
      return [...items.slice(0, items.indexOf(i)), ...items.slice(items.indexOf(i) + 1)];
    }
  }
  return undefined;
};

export { choice, remove };
