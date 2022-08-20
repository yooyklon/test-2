import sortingArrayCharacters from '../sortingArrayCharacters';

const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const charactersResult = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test(('test sortingArrayCharacters function'), () => {
  expect(sortingArrayCharacters(characters)).toEqual(charactersResult);
});
