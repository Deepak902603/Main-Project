import Page from "./Page";
function App() {
  const user = {
    Name: "Deepak Ranjan Rath",
    RollNo: 23,
    RegdNo: 2405432028,
    Branch: "MCA",
    Collge_Name: "GIFT AUTONOMOUS, BHUBANESWAR",
    Place: "Jagatsinghpur, Odisha",
  };
  return (
    <>
      <Page user={user} />
    </>
  );
}

export default App;
