import React from 'react'

import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { Post } from '../components/Post'
import { posts } from '../data/index'

export const Home = () => {
	const [homePosts, setHomePosts] = React.useState(posts)
	const [isPostsLoading, setIsPostsLoading] = React.useState(false)

	return (
		<>
			<Link to='/books-add'>
				<button style={{ padding: '10px' }}>Добавить</button>
			</Link>
			<Grid container spacing={4}>
				{(isPostsLoading ? [...Array(5)] : homePosts).map((obj, index) =>
					isPostsLoading ? (
						<Grid key={index} item xs={12} sm={6} md={4} lg={4}>
							<Post key={index} isLoading={true} />
						</Grid>
					) : (
						<Grid key={index} item xs={12} sm={6} md={4} lg={4}>
							<Post
								id={obj.id}
								title={obj.title}
								author={obj.author}
								publisher={obj.publisher}
								createdAt={obj.created_at}
								isbn={obj.isbn}
								year_published={obj.year_published}
								description={obj.description}
							/>
						</Grid>
					)
				)}
			</Grid>
		</>
	)
}
