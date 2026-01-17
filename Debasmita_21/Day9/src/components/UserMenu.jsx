import { Menu } from "@headlessui/react";
import useFetch from "../hooks/useFetch";

const UserMenu = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">
        Users (Headless UI)
      </h2>

      <Menu>
        <Menu.Button className="w-full bg-indigo-600 text-white py-2 rounded">
          Show Users
        </Menu.Button>

        <Menu.Items className="mt-2 border rounded bg-white shadow">
          {data.map((user) => (
            <Menu.Item key={user.id}>
              {({ active }) => (
                <div
                  className={`px-4 py-2 ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  {user.name}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default UserMenu;
