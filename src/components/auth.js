/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import history from './history'
import { psevdoServer, registration } from './server'
import Enter from './enter'
import Register from './register'
import styles from './auth.scss'

export default function Auth() {
	const [login, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [reg, useReg] = useState(false)
	const [successReg, useSuccessReg] = useState(false)

	const res = (e) => {
		e.preventDefault();
		psevdoServer(login, pass).then((result) => history.push('/anime')).catch(console.log())
	}
	const regist = () => {
		useReg(true)
	}
	const enter = () => {
		useReg(false)
	}
	return (
		<div className={styles.auth}>
			{successReg ? <h3>Вы успешно зарегистрировались</h3> : ''}
			<div className={styles.auth__buttons}>
				<button onClick={enter}>Вход</button>
				<button onClick={regist}>Регистрация</button>
			</div>
			{!reg
				? <Enter
					useSuccessReg={useSuccessReg}
					res={res}
					login={login}
					setEmail={setEmail}
					setPass={setPass}
					pass={pass} />
				:	<Register useSuccessReg={useSuccessReg} enter={enter} register={registration} />
			}

		</div>
	)
}
