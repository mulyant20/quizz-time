export interface IscoreContext {
  score: number
  updateScore: () => any
  resetScore: () => any
  saveCoin: () => any
  coin: any
  exp: any
  buyWithCoin: (param: number) => any
}