import "./Task.css";

const Task = () => {
  return (
    <div className="task-container">
      <h1>📘 Today’s Task: State Management</h1>

      <section>
        <h2>🔹 What is State Management?</h2>
        <p>
          State management is the process of handling data that changes over time
          in an application and making it accessible to required components.
        </p>
      </section>

      <section>
        <h2>🔹 Context API</h2>
        <p>
          Context API is used to share global data (like auth, theme, user)
          without prop drilling.
        </p>
        <ul>
          <li>Good for small to medium apps</li>
          <li>No external library required</li>
          <li>Built into React</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Redux Toolkit</h2>
        <p>
          Redux Toolkit is used for complex global state management with better
          structure and debugging.
        </p>
        <ul>
          <li>Centralized store</li>
          <li>Time-travel debugging</li>
          <li>Best for large apps</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Context vs Redux</h2>
        <table>
          <thead>
            <tr>
              <th>Context API</th>
              <th>Redux Toolkit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple apps</td>
              <td>Large scalable apps</td>
            </tr>
            <tr>
              <td>No middleware</td>
              <td>Middleware support</td>
            </tr>
            <tr>
              <td>Less boilerplate</td>
              <td>Structured flow</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Task;
