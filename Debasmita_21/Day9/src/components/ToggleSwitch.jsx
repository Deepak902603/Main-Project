import { Switch } from "@headlessui/react";
import useToggle from "../hooks/useToggle";

const ToggleSwitch = () => {
  const [enabled, toggle] = useToggle(false);

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded text-center">
      <h2 className="text-lg font-bold mb-4">
        Toggle (Headless UI)
      </h2>

      <div className="flex items-center justify-center gap-4">
        <Switch
          checked={enabled}
          onChange={toggle}   // <-- must be the toggle function
          className={`${
            enabled ? "bg-green-600" : "bg-gray-300"
          } relative inline-flex h-6 w-11 items-center rounded-full transition`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform bg-white rounded-full transition`}
          />
        </Switch>

        <span className="font-semibold">
          {enabled ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
