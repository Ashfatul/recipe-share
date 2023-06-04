import React from "react";
import BlogCard from "./BlogCard";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const posts = useLoaderData();
    return(
        <div className="container py-5">
            <div className="row">
                {
                    posts?.map(post => <BlogCard key={post.id} post={post}/>)
                }
            </div>
        </div>
    )
}

export default Blog;