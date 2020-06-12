import React from "react";
import { Link, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSinglePost } from "../../../custom-hooks/";
import withLocation from "../../withLocation";
import "./SinglePost.css";

const SinglePost = ({ search }) => {
  const { id } = search;
  //const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);
  console.log('id',id);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
        </div>

        <div className="post__body">
          {documentToReactComponents(post.content)}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {"< Back"}
      </Link>

      {renderPost()}
    </div>
  );
}

export default withLocation(SinglePost)
