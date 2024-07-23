import React from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  const posts = [/* Sample posts data */]; // Replace with actual posts data

  return (
    <div>
      <h2>Post List</h2>
      <Link to="/new" className="btn btn-primary mb-3">Add New Post</Link>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
