const girl = {
	name: 'mm',
	aboutMe: 'some info',
	career: 'teacher',
	age: '24',
	avatar: 'img src',
	phone: '13912312312'
}

const user = {
	name: 'gg',
	isValidated: false,
	isVip: false
}

const baseInfo = ['career', 'age']
const privateInfo = ['avatar', 'phone']

const infoProxy = new Proxy(girl, {
	get(girl, key) {
		if (baseInfo.includes(key) && !user.isValidated) {
			console.log('必须实名认证才能看到这条信息')
			return
		}
		if (privateInfo.includes(key) && !user.isVip) {
			console.log('必须成为VIP才能看到这条信息')
			return
		}
		console.log(girl[key])
		return girl[key]
	},
	set(girl, key, value) {
		girl[key] = value
		console.log(key, value)
	}
})
console.log(infoProxy.name)