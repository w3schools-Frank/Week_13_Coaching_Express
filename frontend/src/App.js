import logo from './logo.svg';
import './App.css';
import AddPet from './components/AddPet';
import GetAllPets from './components/GetAllPets';

function App() {
  return (
    <div className="App">
      <AddPet />
      <GetAllPets />
    </div>
  );
}

export default App;
