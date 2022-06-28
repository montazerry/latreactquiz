import React, { useState, useEffect } from 'react'

const Home = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => setPost(json))
    }, [])

    return (
        <div className='container'>
            <h1> Ini Adalah HomeHome </h1>
            <ul>
                {posts.map(post =>
                    <li>{post.title}</li>
                )}
            </ul>
        </div>
    )
}

export default Home