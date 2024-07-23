import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostForm() {
  const { id } = useParams(); // To get the post ID for editing
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (add/edit post)
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Post' : 'Add New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea id="content" className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default PostForm;
