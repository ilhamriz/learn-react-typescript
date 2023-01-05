import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Ilham",
    last: "Rizky"
  };

  const personList = [
    {
      first: "Ilham",
      last: "Rizky"
    },
    {
      first: "Dina",
      last: "Mulyana"
    },
  ]

  return (
    <div className="App">
      <Greet name="Mario" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
