import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("hello", event, id);
        }}
        styles={{ padding: "8px 20px", border: "none" }}
      />

      <Input value="input" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
