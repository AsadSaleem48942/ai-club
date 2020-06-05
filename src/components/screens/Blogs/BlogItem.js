import React,{useEffect} from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function BlogItem(props) {
  const { blog } = props;
  const document = blog.fields.content;

  return (
    <div>
      <article className="post">
        <div className="post-preview col-xs-10 no-gutter">
          <h2>
            <a href={`/blogs/${blog.fields.id}`}>{blog.fields.title}</a>
          </h2>
          {documentToReactComponents(document)}
        </div>
      </article>
    </div>
  );
}

export default BlogItem;
