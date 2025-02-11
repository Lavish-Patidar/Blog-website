// frontend/src/ListPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListPost.css';

const ListPosts = ({ isDarkMode }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className={`posts-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2>List of Posts</h2>
            <div className="posts-list">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-item">
                            <h3>Title: {post.title}</h3>
                            <p>Post: {post.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>
        </div>
    );
};

export default ListPosts;