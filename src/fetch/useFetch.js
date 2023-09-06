import { useState, useEffect } from 'react'
//key=AIzaSyDRB_Zy1fsWv93GTdBbiCJx5ZbfG2WkqXE

function useFetch(searchTerm) {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://www.googleapis.com/books/v1/volumes${searchTerm}`

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])
  return { data, isLoading, error }
}

export default useFetch
