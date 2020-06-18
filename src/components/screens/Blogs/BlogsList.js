import React, { useState, useEffect, Fragment } from "react";
import BlogItem from "./BlogItem";
import './Blog.css'
var contentful = require("contentful");

function BlogsList() {
  const [blogs, setBlogs] = useState();
  var client;

  useEffect(() => {
    const fetchBlogs = async () => {
      client = contentful.createClient({
        space: "otrku8u0ut8w",
        accessToken: "3r-M7UuNPhPMinw_DavPtnXuJGkkQEHZNlvK7xNIjY0",
      });
      client.getEntries({ content_type: "blogPost" }).then((response) => {
        setBlogs(response.items);
      });
    };

    fetchBlogs();
  }, []);

  console.log("blogs", blogs);

  return (
    <Fragment>
      <div className="blog-list">
        <h1>Blogs List</h1>
      {blogs !== undefined ? (
        blogs.map(({fields}, i) => <BlogItem id={i} key={i} {...fields} />)
      ) : (
        <div></div>
      )}
      </div>
      
    </Fragment>
  );
}

export default BlogsList;
