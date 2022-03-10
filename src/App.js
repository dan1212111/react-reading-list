import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import "./App.css"
import BooksList from "./components/BooksList"
import ViewBook from "./components/ViewBook"
import AddBook from "./components/AddBook"

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  console.log(books)

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="book/add">Add Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BooksList books={books} />} />
        <Route path="/view/:id" element={<ViewBook />} />
        <Route path="book/add" element={<AddBook setBooks={setBooks} books={books} />} />
      </Routes>
    </div>
  )
}

export default App
