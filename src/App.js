// App.js
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent'; // No curly braces for default export

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
