import "./App.css";
import Greet from "./components/Greet";
import Oscar from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Oscar>
        <h2>Oscar goes to Ilham Rizky!</h2>
      </Oscar>
      <Greet name="Ilham" isLoggedIn={true} />
    </div>
  );
}

export default App;
