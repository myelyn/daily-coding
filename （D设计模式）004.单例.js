class Singleton {
  static instance = null

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}
const a = new Singleton()
const b = new Singleton()
console.log(a === b)