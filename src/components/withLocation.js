import React from "react";
import { Location } from "@reach/router";
import queryString from "query-string";
import SinglePost from "./screens/single-post/SinglePost";

const withLocation = (SinglePost) => (props) => (
  <Location>
    {({ location, navigate }) => (
      <SinglePost
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

export default withLocation;
