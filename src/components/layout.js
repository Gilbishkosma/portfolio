import React from 'react';
import Style from './layoutcss.module.css';



export default ({children}) => (
	<div className={Style.header}>
	<div className={Style.menu}>
		<ul className={Style.menu_item}>
			<li>Gil20</li>
		</ul>
		<ul className={Style.menu_item}>
			<li className={Style.list}>About</li>
			<li className={Style.list}>Contact</li>
		</ul>
	</div>
	</div>
	)