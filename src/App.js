import './App.css';
import './App.css'
function App() {
  return (
    <div>
      <div className="container">
        <form className="input-section">
          <h1>Todo App</h1>
          <input type="text" placeholder='Enter items..' />
        </form>
        <ul>
          <li>Add <i className="fas fa-trash-alt"></i></li>
          <li>Add <i className="fas fa-trash-alt"></i></li>
          <li>Add <i className="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    </div>
  );
}
export default App;
