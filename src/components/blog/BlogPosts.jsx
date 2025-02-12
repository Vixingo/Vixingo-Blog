import React from "react";
import { useGetPostsQuery } from "../../services/jsonPlaceholderApi";

const BlogPosts = () => {
    const { data, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts!</p>;

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {data?.posts?.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;
