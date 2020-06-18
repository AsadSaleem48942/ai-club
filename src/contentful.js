const client = require("contentful").createClient({
  space: "otrku8u0ut8w",
  accessToken: "3r-M7UuNPhPMinw_DavPtnXuJGkkQEHZNlvK7xNIjY0",
});

const getBlogPosts = () =>
  client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items);

const getSinglePost = (id) =>
  client
    .getEntries({
      "fields.id": id,
      content_type: "blogPost",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };
