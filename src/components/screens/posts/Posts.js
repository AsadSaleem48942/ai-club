import React from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { usePosts } from "../../../custom-hooks/";
import "./Posts.css";

export default function Posts() {
  const [posts, isLoading] = usePosts();
  console.log("posts", posts);
  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;

    return posts.map((post) => (
      <Link
        className="posts__post"
        key={post.fields.id}
        to={`blogs/?id=${post.fields.id}`}
      >
        <h3>{post.fields.title}</h3>
      </Link>
    ));
  };

  return (
    <div className="posts__container">
      <h2>Blogs</h2>

      <div className="posts">{renderPosts()}</div>
    </div>
  );
}
