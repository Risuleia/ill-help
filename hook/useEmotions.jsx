import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';

const api_key = RAPID_API_KEY

const useFetch = (url) => {
    const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [err, setErr] = useState(null)
    const options = {
      method: 'POST',
      url: 'https://emotion-detection2.p.rapidapi.com/emotion-detection',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': api_key,
        'X-RapidAPI-Host': 'emotion-detection2.p.rapidapi.com'
      },
      data: {
        url: url
      }
    };
    
    const fetchData = async () => {
        try {
            const res = await axios.request(options)
            setData(res.data.emotion.value)
            // setIsLoading(false)
        } catch (err) {
            console.log(err)
            setErr(err)
            setData('An error occured.')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // const refetch = () => {
    //     setIsLoading(true)
    //     fetchData()
    // }

    return data

}

export default useFetch