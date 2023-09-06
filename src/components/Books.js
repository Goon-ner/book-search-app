import { NavLink } from 'react-router-dom'
import Search from './Search'
import '../styles/books.css'
import useFetch from '../fetch/useFetch'

const Books = ({ searchTerm, searchBook, changeSort }) => {
  const { data, isLoading } = useFetch(searchTerm)

  return (
    <div className="booksPage">
      <Search changeSort={changeSort} searchBook={searchBook} />
      <div className="books">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.items.map((book) => (
            <NavLink className="singleBook" to={book.id} key={book.id}>
              <img
                className="bookImg"
                src={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                alt={book.id}
              />
              <h2>{book.volumeInfo.title}</h2>
              <h3>{book.volumeInfo.authors}</h3>
            </NavLink>
          ))
        )}
      </div>
    </div>
  )
}

export default Books
