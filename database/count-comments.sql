-- Count the number of comments on a post with a specific post_id
SELECT COUNT(*) AS comment_count
FROM comments
WHERE post_id = specific_post_id;
