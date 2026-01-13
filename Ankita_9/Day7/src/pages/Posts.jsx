import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi";

const Posts = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <h2>Loading posts...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts (React Query)</h1>
      {data.slice(0, 10).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
