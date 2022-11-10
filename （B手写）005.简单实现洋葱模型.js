// 实现
class Interceptor {
  constructor() {
    this.aspects = []
  }
  use (fn) {
    this.aspects.push(fn)
    return this
  }
  run (ctx) {
    const proc = this.aspects.reduceRight((a, fn) => {
      console.log(a)
      return async function() {
        await fn(ctx, a)
      }
    }, () => Promise.resolve())
    proc()
  }
}

// 使用
const ctx = {
  count: 1
}

const interceptor = new Interceptor()

interceptor.use((ctx, next) => {
  console.log(1)
  next()
  console.log(4)
})
interceptor.use((ctx, next) => {
  console.log(2)
  next()
  console.log(3)
})

interceptor.run(ctx) // 1 2 3 4