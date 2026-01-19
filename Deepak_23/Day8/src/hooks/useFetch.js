import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, 800); // smooth loading effect
  }, [url]);

  return { data, loading };
};

export default useFetch;
