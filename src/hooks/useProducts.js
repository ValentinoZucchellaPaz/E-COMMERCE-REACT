import { useState, useEffect } from 'react'

export default function useProducts (asyncFunction, dependencies = []) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    !loading && setLoading(true)

    asyncFunction()
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, dependencies)

  return { data, loading, error }
}
