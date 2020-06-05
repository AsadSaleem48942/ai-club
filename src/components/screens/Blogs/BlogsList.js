import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
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
    <div>
      <h1>Blogs List</h1>
      {blogs !== undefined ? (
        blogs.map((blog, i) => <BlogItem id={i} key={i} blog={blog} />)
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BlogsList;
