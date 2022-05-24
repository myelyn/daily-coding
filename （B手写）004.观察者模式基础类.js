// 发布者类
class Publisher {
	constructor () {
		this.obs = []
	}
	add (ob) {
		this.obs.push(ob)
		console.log(`添加订阅者${ob.name}`)
	}
	remove (ob) {
		this.obs.forEach((item, i) => {
			if (item === ob) {
				this.obs.splice(i,1)
			}
		})
		console.log(`移除订阅者${ob.name},剩余订阅者${JSON.stringify(this.obs)}`)
	}
	notify () {
		this.obs.forEach(ob => {
			ob.update(this)
		})
	}
}
// 订阅者类
class Observer {
	constructor (name) {
		this.name = name
	}
	update () {
		console.log(`收到发布者通知，订阅者${this.name}开始处理`)
	}
}

const pub = new Publisher()
const ob1 = new Observer('ob1')
const ob2 = new Observer('ob2')
const ob3 = new Observer('ob3')
pub.add(ob1)
pub.add(ob2)
pub.add(ob3)
pub.notify()
pub.remove(ob2)