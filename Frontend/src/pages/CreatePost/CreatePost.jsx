// frontend/src/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import "./CreatePost.css"

const CreatePost = ({ isDarkMode }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/posts', { title, description });
            if (res) {
                alert("Blog save sussesfully")
            }
            else {
                alert("Blog not save ")
            }
            setTitle('');
            setDescription('');
        }
        catch (error) {
            console.log(" Error in sending the blog", error);
        }
    };

    return (
        <div className={`post-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit} className={`form-post ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
