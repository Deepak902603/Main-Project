import UserMenu from "./components/UserMenu";
import ToggleSwitch from "./components/ToggleSwitch";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Component Library Integration
      </h1>

      <UserMenu />

      <div className="my-8 border-t"></div>

      <ToggleSwitch />
    </div>
  );
};

export default App;
