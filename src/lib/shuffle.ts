export function shuffle(array: string[]) {
  let shuffledArray = array
  shuffledArray.sort(() => Math.random() - 0.5)
  return shuffledArray
}
