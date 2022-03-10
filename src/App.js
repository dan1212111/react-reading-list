import { useEffect, useState } from 'react';
import {Routes} from 'react-router-dom'
import './App.css';

function App() {

  const [books, setBooks] = useState([])

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>Books</li>
          <li>Add Book</li>
        </ul>
      </nav>
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
