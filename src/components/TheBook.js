import { NavLink, useParams } from 'react-router-dom'
import '../styles/theBook.css'
import useFetch from '../fetch/useFetch'
import returnIcon from '../icons/left.png'

const TheBook = () => {
  const params = useParams()
  const book = useFetch('/' + params.bookId)
  console.log(params.bookId, book)
  return (
    <div className="theBookPage">
      <h1 className="bookTitle">{book.data.volumeInfo.title}</h1>
      <h2 className="bookAuthor">{book.data.volumeInfo.authors}</h2>
      <NavLink to={'/'} className="linkReturn">
        <img className="returnIcon" alt="returnIcon" src={returnIcon} />
      </NavLink>
      <div className="book">
        <div className="bookImg">
          <img
            className="bookImage"
            src={book.data.volumeInfo.imageLinks.thumbnail}
            title={book.data.volumeInfo.title}
            alt={book.data.id}
          />
        </div>
        <div className="description">
          <text className="bookText">{book.data.volumeInfo.description}</text>
        </div>
      </div>
    </div>
  )
}

export default TheBook
