import React from 'react'

import Grid from '@mui/material/Grid'

import { Post } from '../components/Post'
import { orders } from '../data/index'
import { Form } from 'react-router-dom'

export const BooksAdd = () => {
	const emptyForm = {
		isbn: '',
		title: '',
		author: '',
		publisher: '',
		year_published: '',
		description: '',
	}

	const [formData, setFormData] = React.useState(emptyForm)
	const handleSubmit = async data => {
		try {
			// await axios.post('/orders', data)
			alert('Успешно')
		} catch (error) {
			alert('Произошла ошибка при отправке')
			console.error(error)
		} finally {
			setFormData(emptyForm)
		}
	}
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'grid', padding: '15px' }}
			>
				<label>
					Название книги
					<input
						type='text'
						name='title'
						minLength='2'
						maxLength='30'
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					Автор
					<input
						type='text'
						name='author'
						minLength='2'
						maxLength='30'
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					Издатель
					<input
						type='text'
						name='publisher'
						minLength='2'
						maxLength='30'
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					Описание
					<input
						type='text'
						name='description'
						minLength='2'
						maxLength='30'
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					Год выпуска
					<input
						type='text'
						name='year_published'
						minLength='2'
						maxLength='30'
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					isbm
					<input
						type='text'
						name='isbm'
						minLength='2'
						maxLength='30'
						required
						value={formData.isbm}
						onChange={handleChange}
					/>
				</label>
			</form>
			<button style={{ padding: '10px' }} onSubmit={handleSubmit}>
				Добавить
			</button>
		</>
	)
}
