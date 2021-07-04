import React, { useEffect, useState } from 'react';

import './App.css';

import Card from "./components/Card/Card.jsx";
import { getData } from './api/api';

function App() {

	const [data, setData] = useState({});

	const fetchData = async () => {
		const { confirmed, recovered, active, deaths, lastupdatedtime } = await getData();
		setData({ confirmed, recovered, active, deaths, lastupdatedtime });
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Card data={data} />
		</>
	);
}

export default App;
