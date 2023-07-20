import axios from 'axios'
import './App.css'
import React, { useState, useEffect } from 'react'
import Users from './User/Users'


export default function App() {
	const [data, setdData] = useState([])
	const [search, setSearch] = useState('')

useEffect(() => {
	axios.get("https://jsonplaceholder.typicode.com/users")
	.then(res => setdData(res.data))
}, [])

const handleChange = (e) => {
	setSearch(e.target.value)
}
  return (
	<div className='div-app'>
		<input 
		placeholder='Search...' 
		value={search} type="text" 
		name="text" 
		onChange={handleChange} />
		<Users data={data} search={search}/>
	</div>
  )
}
