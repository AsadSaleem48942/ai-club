import React,{useEffect} from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function BlogItem(props) {
  const { blog } = props;
  const document = blog.fields.content;
  let options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <img class="img-fluid" src={`${node.data.target.fields.file.url}`} />
        );
      },
    },
  };

  return (
    <div>
      <article className="post">
        <div className="post-preview col-xs-10 no-gutter">
          <h2>
            <a href={`/blogs/${blog.fields.id}`}>{blog.fields.title}</a>
          </h2>
          {documentToReactComponents(document,options)}
        </div>
      </article>
    </div>
  );
}

export default BlogItem;
