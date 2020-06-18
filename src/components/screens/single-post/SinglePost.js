import React from "react";
import { Link } from "react-router-dom";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSinglePost } from "../../../custom-hooks/";
import "./SinglePost.css";

const SinglePost = (props) => {
  const { match } = props;
  let { id } = match.params;
  const [post, isLoading] = useSinglePost(id);
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description } = node.data.target.fields;
        return (
          <img class="img-fluid" src={`${node.data.target.fields.file.url}`} />
        );
      },
    },
  };

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <div className="posts__container">
          <div className="post__intro">
            <h2 className="post__intro__title">{post.title}</h2>
          </div>

          <div className="post__body">
            {documentToReactComponents(post.content,options)}
          </div>
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
};

export default SinglePost;
