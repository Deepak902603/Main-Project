import Users from "./components/Users";
import ToggleComponent from "./components/ToggleComponent";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Custom Hooks Demo
      </h1>

      {/* useFetch Demo */}
      <Users />

      {/* Divider */}
      <div className="my-8 border-t"></div>

      {/* useToggle Demo */}
      <ToggleComponent />
    </div>
  );
};

export default App;
