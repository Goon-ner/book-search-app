import { NavLink, useParams } from 'react-router-dom'
import '../styles/theBook.css'
import useFetch from '../fetch/useFetch'
import returnIcon from '../icons/left.png'

const TheBook = () => {
  const params = useParams()
  const theBook = useFetch('/' + params.bookId)

  return (
    <div className="theBookPage">
      <h1 className="bookTitle">{theBook.data.volumeInfo.title}</h1>
      <h2 className="bookAuthor">{theBook.data.volumeInfo.authors}</h2>
      <NavLink to={'/'} className="linkReturn">
        <img className="returnIcon" alt="returnIcon" src={returnIcon} />
      </NavLink>
      <div className="book">
        <div className="bookImg">
          <img
            className="bookImage"
            src={theBook.data.volumeInfo.imageLinks.thumbnail}
            title={theBook.data.volumeInfo.title}
            alt={theBook.data.id}
          />
        </div>
        <div className="description">
          <text className="bookText">
            {theBook.data.volumeInfo.description}
          </text>
        </div>
      </div>
    </div>
  )
}

export default TheBook
