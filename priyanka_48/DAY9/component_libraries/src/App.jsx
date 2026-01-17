import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from "@headlessui/react";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">

      {/* Simple Button */}
      <button
        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setMessage("Button clicked!")}
      >
        Click Me
      </button>

      {/* Show selected message */}
      {message && (
        <p className="text-gray-700 font-semibold">{message}</p>
      )}

      {/* Dropdown */}
      <Menu>
        <MenuButton className="px-4 py-2 bg-blue-500 text-white rounded">
          Open Dropdown
        </MenuButton>

        <MenuItems className="mt-2 w-40 bg-white shadow rounded p-1">
          
          <MenuItem>
            <button
              onClick={() => setMessage("Option 1 selected")}
              className="w-full px-4 py-2 text-left rounded data-[active]:bg-blue-100"
            >
              Option 1
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setMessage("Option 2 selected")}
              className="w-full px-4 py-2 text-left rounded data-[active]:bg-blue-100"
            >
              Option 2
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setMessage("Option 3 selected")}
              className="w-full px-4 py-2 text-left rounded data-[active]:bg-blue-100"
            >
              Option 3
            </button>
          </MenuItem>

        </MenuItems>
      </Menu>

    </div>
  );
}
