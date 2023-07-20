import React from 'react'
import './Users.css'

export default function Users({data, search}) {
  return (
	<div className='container'>
		{data.filter((obj) => {
			const anun = (obj.name).toLowerCase()
			return anun.includes(search.toLowerCase())
		}).map(elem => {
			return (
				<div className='div-elem' key={elem.id}>
					<h2>{elem.name}</h2>
					<h4>{elem.email}</h4>
				</div>
			)
		})}
	</div>
  )
}
