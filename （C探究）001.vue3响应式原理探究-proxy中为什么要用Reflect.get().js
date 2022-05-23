const people = new Proxy({
	_name: 'aaa',
	get name () {
		return this._name
	}
}, {
	get(t, p, r) {
		// return t[p] // 用t[p]会返回aaa
		// return Reflect.get(t,p) // 不传receiver也会返回aaa
		return Reflect.get(t,p,r)
		// 返回bbb 用Reflect.get(target,property,receiver)，主要注意第三个参数（如果target对象中指定了getter，receiver则为getter调用时的this值），它表示方法的调用者，它可以让this指向调用者
	}
})


let men = {_name: 'bbb'}
men.__proto__ = people

console.log(men.name)