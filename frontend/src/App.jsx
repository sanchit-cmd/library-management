import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './page/CreatePost';
import DeletePost from './page/DeletePost';
import EditPost from './page/EditPost';
import Home from './page/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreatePost />} />
				<Route path='/delete/:id' element={<DeletePost />} />
				<Route path='/edit/:id' element={<EditPost />} />
			</Routes>
		</>
	);
}

export default App;
