import { useEffect, useState } from "react";

import { getSinglePost } from "../contentful";

export default function useSinglePost(id) {
  const promise = getSinglePost(id);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise.then((result) => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, [promise]);

  return [post, isLoading];
}
