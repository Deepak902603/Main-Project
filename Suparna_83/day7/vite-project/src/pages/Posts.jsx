import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function Posts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
