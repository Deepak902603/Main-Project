type HelloProps = {
  name: string;
  age: number;
};

function Hello({ name, age }: HelloProps) {
  return <h2>Hello {name}, Age {age}</h2>;
}

function App() {
  return (
    <div>
      <Hello name="Priyanka" age={22} />
    </div>
  );
}

export default App;
