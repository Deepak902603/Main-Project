
import { useState, useEffect } from "react";

/* =====================================================
   STEP 5: Custom Hook 1 – useCounter
   PURPOSE: Reusable counter logic
   ===================================================== */
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

/* =====================================================
   STEP 6: Custom Hook 2 – useToggle
   PURPOSE: Reusable true/false logic
   ===================================================== */
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle];
}

/* =====================================================
   STEP 7: Custom Hook 3 – useForm
   PURPOSE: Reusable form state logic
   ===================================================== */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function resetForm() {
    setValues(initialValues);
  }

  return { values, handleChange, resetForm };
}

/* =====================================================
   STEP 8: Custom Hook 4 – useFetch
   PURPOSE: Reusable API fetching logic
   ===================================================== */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

/* =====================================================
   STEP 9: App Component – USING ALL HOOKS
   ===================================================== */
export default function App() {
  // useCounter
  const counter = useCounter(5);

  // useToggle
  const [isOpen, toggle] = useToggle();

  // useForm
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });

  // useFetch
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(values));
    resetForm();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Day 8 – Reusable Custom Hooks</h1>

      {/* Counter */}
      <h2>Counter Hook</h2>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>Reset</button>

      {/* Toggle */}
      <h2>Toggle Hook</h2>
      <button onClick={toggle}>Toggle</button>
      {isOpen && <p>Toggle is ON</p>}

      {/* Form */}
      <h2>Form Hook</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <br /><br />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {/* Fetch */}
      <h2>Fetch Hook</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.slice(0, 3).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}
