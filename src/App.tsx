import "./App.css";
import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Ilham", "Rizky", "Mario"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
      {/* <List
        items={[
          {
            id: 1,
            first: "Mario",
            last: "Bro"
          },
          {
            id: 2,
            first: "Mario",
            last: "Bro"
          },
          {
            id: 3,
            first: "Mario",
            last: "Bro"
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
    </div>
  );
}

export default App;
