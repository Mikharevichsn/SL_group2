import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  console.log('posts = ', posts);

  const getPosts = async () => {
    try {
      const response = await fetch('/posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log('!!! ERROR: ', err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
