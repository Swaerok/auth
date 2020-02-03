const users = [
	{
		login: 'bla1',
		password: 'bla2',
		name: 'Dasha',
		age: 28,
	},
]


export default function psevdoServer(log, pass) {
	return new Promise(((resolve, reject) => {
		let res = users.find((item) => {
			return (item.login === log && item.password === pass)
        })
		if (res) {
			setTimeout(() => resolve(res), 3000)
		} else {
			setTimeout(() => reject(new Error('Ошибка-кака')), 3000)
		}
	}))
}
