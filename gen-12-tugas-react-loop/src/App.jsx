import { useState } from 'react'
import Book from './Book'
import './App.css'

function App(){

  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'a Brief History of Time',
      author: 'Stephen Hawking'
    },
    {
      id: 2,
      title: 'Grand Design',
      author: 'Stephen Hawking'
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari'
    },
    {
      id: 4,
      title: "Sophie's World",
      author: 'Jostein Garder'
    },
    {
      id: 5,
      title: 'Origin',
      author: 'Dan Brown'
    }
  ])

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  const addBook = (event) => {
    event.preventDefault()
    const obj = {
      id: books.length+1,
      title: newTitle,
      author: newAuthor
    }
    const copyBooks = [...books]
    copyBooks.push(obj)
    if(newTitle !== '' && newAuthor !==''){
      setBooks(copyBooks)
    }
    setNewTitle('')
    setNewAuthor('')
  }

  const removeBookById = (id) => {
    const index = books.findIndex((element) => element.id === id)
    const copyBooks = [...books]
    copyBooks.splice(index, 1)
    setBooks(copyBooks)
  }

  return <>
    <h1>Bookshelf</h1>
    <div>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={newTitle} onChange={(event) => setNewTitle(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" value={newAuthor} onChange={(event) => setNewAuthor(event.target.value)}/>
        </div>
        <button type="submit" onClick={(event) => addBook(event)}>Add to list</button>
      </form>
      <div className="book-container">
      {
        books.map((element, index, self) => {
          return <Book 
          key={element.id}
          title={element.title} 
          author={element.author}
          removeFunc= {() => removeBookById(element.id)}></Book>
        })
      }
      </div>
    </div>
  </>
}

export default App