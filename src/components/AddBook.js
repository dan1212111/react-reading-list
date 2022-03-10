import { useState } from "react"

function AddBook(props) {
  const { setBooks, books } = props

  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")

  function handleTitle(event) {
    const inputValue = event.target.value
    setTitle(inputValue)
  }

  function handleName(event) {
    const inputValue = event.target.value
    setName(inputValue)
  }

  function handleGenre(event) {
    const inputValue = event.target.value
    setGenre(inputValue)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: name,
        genre: genre,
      }),
    }

    fetch(`http://localhost:4000/books`, options)
      .then((res) => res.json())
      .then((json) => {
        setBooks([...books, json])
      })

      setTitle("")
      setName("")
      setGenre("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>

      <label>
        Title
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={handleTitle}
          required
        />
      </label>

      <label>
        Author
        <input
          id="author"
          name="author"
          type="text"
          value={name}
          onChange={handleName}
          required
        />
      </label>

      <label>
        Genre
        <select
          id="title"
          name="title"
          type="radio"
          onChange={handleGenre}
          required
        >
          <option checked={genre === "horror"}>Horror</option>
          <option checked={genre === "Science Fiction"}>Science Fiction</option>
          <option checked={genre === "Nonfiction"}>Nonfiction</option>
          <option checked={genre === "History"}>History</option>
          <option checked={genre === "Thriller"}>Thriller</option>
        </select>
      </label>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddBook
