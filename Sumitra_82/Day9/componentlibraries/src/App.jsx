
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="bg-blue-600 text-white px-4 py-2 rounded">
          Open Menu
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block w-full px-4 py-2 text-left`}
                >
                  Profile
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block w-full px-4 py-2 text-left`}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
