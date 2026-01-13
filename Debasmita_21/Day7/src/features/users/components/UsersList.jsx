import { useUsers } from '../hooks/useUsers';

const UsersList = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
