-- Retrieve all posts by a user with a specific username
SELECT p.id, p.title, p.content, p.created_at
FROM posts p
JOIN users u ON p.user_id = u.id
WHERE u.username = 'specific_username';
