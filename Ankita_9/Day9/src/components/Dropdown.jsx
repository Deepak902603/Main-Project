import { Menu } from "@headlessui/react";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full py-3 bg-indigo-500 text-white rounded-lg">
        Options
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`w-full px-4 py-2 text-left ${
                active ? "bg-indigo-100" : ""
              }`}
            >
              Profile
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`w-full px-4 py-2 text-left ${
                active ? "bg-indigo-100" : ""
              }`}
            >
              Settings
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
