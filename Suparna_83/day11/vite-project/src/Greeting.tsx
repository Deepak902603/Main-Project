type GreetingProps = {
  name: string;
  age: number;
  status: string;
};

function Greeting(props: GreetingProps) {
  return (
    <div className="profile">
      <h2 className="text">Name: {props.name}</h2>
      <p className="text">Age: {props.age}</p>
      <p className="text">Status: {props.status}</p>
    </div>
  );
}

export default Greeting;
