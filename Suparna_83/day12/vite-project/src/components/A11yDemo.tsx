function A11yDemo() {
  return (
    <section>
      <h2>A11y Demo</h2>

      <label htmlFor="name">Name:</label>
      <input id="name" type="text" />

      <button aria-label="Submit Form">Submit</button>
    </section>
  );
}

export default A11yDemo;
