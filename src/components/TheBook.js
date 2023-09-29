import { NavLink, useParams } from 'react-router-dom'
import '../styles/theBook.css'
import useFetch from '../fetch/useFetch'
import returnIcon from '../icons/left.png'

const TheBook = () => {
  const params = useParams()
  const { data, isLoading } = useFetch(`/${params.bookId}`)
  console.log(data)
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="theBookPage">
      <h1 className="bookTitle">{data.volumeInfo.title}</h1>
      <h2 className="bookAuthor">{data.volumeInfo.authors}</h2>
      <NavLink to={'/'} className="linkReturn">
        <img className="returnIcon" alt="returnIcon" src={returnIcon} />
      </NavLink>
      <div className="book">
        <div className="bookImg">
          <img
            className="bookImage"
            src={data.volumeInfo.imageLinks.thumbnail}
            title={data.volumeInfo.title}
            alt={data.id}
          />
        </div>
        <div className="description">
          <div className="bookText">{data.volumeInfo.description}</div>
        </div>
      </div>
    </div>
  )
}

export default TheBook
