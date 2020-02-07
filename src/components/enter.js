/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styles from './enter.scss'

export default function Enter(props) {
	const { res, useSuccessReg, pass, email, setEmail, setPass } = props
	return (
		<div className={styles.enter}>
			<h1>Вход</h1>
			<form onSubmit={res} className={styles.enter__form}>
				<label>Email</label>
				<input onChange={(e) => { setEmail(e.target.value); useSuccessReg(false) }} value={email}/>
				<label>Password</label>
				<input onChange={(e) => { setPass(e.target.value); useSuccessReg(false) }} value={pass} />
				<button type="submit">Войти</button>
			</form>
		</div>
	)
}
