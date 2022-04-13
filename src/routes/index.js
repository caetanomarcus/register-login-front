import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import LoginRegister from '../pages';
import PrivateRoutes from './privateRoutes';


const RoutesComponent = ({ user }) => {
	const token = localStorage.getItem('token');
	const [isDataLoaded, setIsDataLoaded] = useState(false);
	

	const renderRoutes = () => {
		return (
			<Routes>
			<Route path="/" element={<LoginRegister user={user} />} />
			<Route path="/home" element={ <PrivateRoutes user={user}><Home /></PrivateRoutes>} />
		</Routes>
		)
	}

	return (
		renderRoutes()
	)
}

export default RoutesComponent;