/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import styles from './register.scss'

export default function Register(props) {
	const { register, enter,useSuccessReg } = props
	const [user, setUser] = useState({})
	const reg = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}
	const cons = (e) => {
		e.preventDefault()
		register(user)
		enter()
		useSuccessReg(true)
		console.log(user)
	}
	return (
		<div className={styles.register}>
			<h1>Регистрация </h1>
			<form onSubmit={cons} className={styles.register__form}>
				<label>Имя</label>
				<input
					name='name'
					onChange={reg}
					value={user.name || ''} />
				<label>Фамилия</label>
				<input
					name='surname'
					onChange={reg}
					value={user.surname || ''} />
				<label>Возраст</label>
				<input
					name='age'
					onChange={reg}
					value={user.age || ''} />
				<label>Пароль</label>
				<input
					name='password'
					onChange={reg}
					value={user.password || ''} />
				<label>Email</label>
				<input
					name='email'
					onChange={reg}
					value={user.email || ''} />
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	)
}
