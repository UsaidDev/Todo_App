import './Components/App.css'
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';


function App() {
  
  return (
    <div>
      <div className="container">
        <form className="input-section">
          <h1>Todo App</h1>
          <Addtask/>
        </form>
        <ul>
          <ListTask/>
        </ul>
      </div>
    </div>
  );
}
export default App;
