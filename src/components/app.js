/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
	Router,
	Switch,
	Route,
} from 'react-router-dom';
import {history} from './history'
import styles from './app.scss'
import Auth from './auth'
import Anime from './anime'

export const App = () => {
	return (
		<Router history={history}>
			<div className={styles.app}>
				<Switch>
					<Route exact path="/" component={Auth} />
					<Route path="/anime" component={Anime} />
				</Switch>
			</div>
		</Router>
	)
}
