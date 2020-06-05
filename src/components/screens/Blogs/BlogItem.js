import React from "react";

function BlogItem(props) {
  const {blog} = props
  return (
    <div>
      <article className="post">
        <div className="post-preview col-xs-10 no-gutter">
          <h2>
            <a href="/hello-world">{blog.fields.title}</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
            laudantium magnam, voluptate eos ullam odit beatae, cum ipsa laborum
            eius eum earum ut. Nobis numquam ducimus delectus illo tenetur!
          </p>
        </div>
      </article>
    </div>
  );
  
}


export default BlogItem;
