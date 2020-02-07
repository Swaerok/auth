const users = [

]

export function registration(obj) {
	users.push(obj)
}
export function psevdoServer(email, password) {
	return new Promise(((resolve, reject) => {
		const res = users.find((item) => {
			return (item.email === email && item.password === password)
		})
		if (res) {
			setTimeout(() => resolve(res), 3000)
		} else {
			setTimeout(() => reject(new Error('Ошибка-кака')), 3000)
		}
	}))
}
