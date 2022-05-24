// 发布者类
class Publisher {
  constructor() {
    this.obs = []
  }
  add(ob) {
    this.obs.push(ob)
    console.log(`添加订阅者${ob.name}`)
  }
  remove(ob) {
    this.obs.forEach((item, i) => {
      if (item === ob) {
        this.obs.splice(i, 1)
      }
    })
    console.log(`移除订阅者${ob.name},剩余订阅者${JSON.stringify(this.obs)}`)
  }
  notify() {
    this.obs.forEach(ob => {
      ob.update(this)
    })
  }
}
// 订阅者类
class Observer {
  constructor(name) {
    this.name = name
  }
  update() {
    console.log(`收到发布者通知，订阅者${this.name}开始处理`)
  }
}


// 产品经理类
class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prd = null
  }
  // 产品经理设置需求文档
  setPrd(prd) {
    this.prd = prd
    console.log('产品经理添加了需求文档')
  }
  // 开发者获取需求文档
  getPrd(ob) {
    console.log(`开发者${ob.name}获取了需求文档`)
    return this.prd
  }
}

// 开发者类
class DevObserver extends Observer {
  constructor(...args) {
    super(...args)
  }
  // 开发者获取最新的工作文档
  update(pubObj) {
    this.prd = pubObj.getPrd(this)
    this.work()
  }
  // 开发者工作
  work() {
    console.log(`开发者${this.name}拿到了需求文档[${this.prd}]，开始工作`)
  }
}


const pm = new PrdPublisher()

// 产品经理发布需求文档
pm.setPrd('我是需求文档')

// 产品经理确定开发者
const ob1 = new DevObserver('ob1')
const ob2 = new DevObserver('ob2')
pm.add(ob1)
pm.add(ob2)

// 产品经理发出开始工作的指令
pm.notify()