/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import psevdoServer from './server'

export default function Auth() {
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');

	const res = (e) => {
		e.preventDefault();
		
		psevdoServer(login, pass).then((result) => console.log(result)).catch(console.log())
	}

	return (
		<form onSubmit={res}>
			<input onChange={(e) => { setLogin(e.target.value) }} value={login} />
			<input onChange={(e) => { setPass(e.target.value) }} value={pass} />
			<button type="submit">Add</button>
		</form>
	)
}
