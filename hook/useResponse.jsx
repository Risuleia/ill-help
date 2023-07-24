import { OpenAIApi, Configuration } from "openai";
import { OPENAI_API_KEY } from '@env'
// import { useEffect, useState } from "react";

const useResponse = (prompt) => {

  // const [data, setData] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [err, setErr] = useState(null)

  // if (!prompt || prompt === '') return { data, isLoading, err }

  const openai = new OpenAIApi(new Configuration({
    apiKey: OPENAI_API_KEY
  }))

  const fetchData = async () => {
    try {
        const res = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }]
        })
        return res.data.choices[0].message.content
    } catch (err) {
        console.log(err)
        return 'An error occured'
        // setErr(err)
    }

  }

  fetchData()

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // return {
  //   data,
  //   isLoading,
  //   err
  // }

}

export default useResponse