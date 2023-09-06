import { React, useState } from 'react'
import '../styles/search.css'
import searchIcon from '../icons/search.png'

const booksSort = ['relevance', 'newest']

const Search = ({ changeSort, searchBook }) => {
  const [inputText, setInputText] = useState('')
  const formSubmit = (event) => {
    event.preventDefault()
    searchBook(inputText)
    setInputText('')
  }
  return (
    <div className="search">
      <h1 className="searchTitle">Search for books</h1>
      <form className="searchForm" onSubmit={formSubmit}>
        <input
          type="search"
          value={inputText}
          className="placeholder"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What are you looking for?"
        ></input>
        <button className="inputButton" type="submit">
          <img className="searchIcon" alt="searchIcon" src={searchIcon} />
        </button>
      </form>
      <div className="booksSort">
        <div className="booksSortText">Sorting by:</div>
        {booksSort.map((item) => (
          <button
            className="booksSortButton"
            onClick={() => {
              changeSort(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Search
