import "./App.css";
import Button from "./components/html/Button";
// import Toast from "./components/templateLiterals/Toast";

function App() {
  return (
    <div className="App">
      {/* <Toast position="center" /> */}
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        Submit
      </Button>
    </div>
  );
}

export default App;
