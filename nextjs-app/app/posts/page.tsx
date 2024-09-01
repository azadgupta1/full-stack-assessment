// app/posts/page.tsx

"use client";  // This marks the component as a Client Component

import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts or perform other side effects here
    fetch('http://localhost:5002/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
