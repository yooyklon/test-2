export default function sortingArrayCharacters(characters) {
  return characters.sort((a, b) => b.health - a.health);
}
