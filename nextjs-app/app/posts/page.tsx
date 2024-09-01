"use client";  // marks component as a Client Component

import { useEffect, useState } from 'react';

// structure of a Post object
interface Post {
  id: number;
  title: string;
  content: string;
}

function PostsPage() {
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from the mock API when the component mounts
    fetch('http://localhost:5002/posts')  
      .then((response) => response.json())  // Converting the response to JSON
      .then((data) => setPosts(data));  
  }, []);  

  return (
    <div>
      <h1>Posts</h1>  {/* Heading for the page */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>  {/* Displaying title of the post */}
          <p>{post.content}</p>  {/* Displaying the content of the post */}
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
