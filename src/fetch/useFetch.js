import { useState, useEffect } from 'react'
import axios from 'axios'
import axiosRetry from 'axios-retry'
//key=AIzaSyDRB_Zy1fsWv93GTdBbiCJx5ZbfG2WkqXE

function useFetch(searchTerm) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://www.googleapis.com/books/v1/volumes${searchTerm}`

  useEffect(() => {
    async function fetchData() {
      axiosRetry(axios, { retries: 2 })
      axios
        .get(url)
        .then(function (response) {
          setData(response.data)
        })
        .catch((e) => console.log(e))
        .finally(function () {
          setIsLoading(false)
        })
    }
    fetchData()
  }, [url])
  return { data, isLoading }
}
export default useFetch
