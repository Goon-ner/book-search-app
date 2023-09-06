import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState } from 'react'
import Books from './components/Books'
import TheBook from './components/TheBook'

function App() {
  const [sort, setSort] = useState('relevance')
  const [searchTerm, setSearchTerm] = useState('?q=orderBy=relevance')
  const changeSort = (item) => {
    setSearchTerm(`?q=orderBy=${item}`, setSort(item))
  }
  const searchBook = (text) => setSearchTerm(`?q=${text + '&'}orderBy=${sort}`)
  console.log(searchTerm)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Books
                searchTerm={searchTerm}
                changeSort={changeSort}
                searchBook={searchBook}
              />
            }
          />
          <Route path="/:bookId" element={<TheBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
