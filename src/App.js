import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './component/todo.js';
import Navbar from './component/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="links">

      </div>
      <Todo/>
    </div>
  );
}

export default App;
