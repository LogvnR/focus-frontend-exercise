import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import useSWR from 'swr'

import userStore from '../helpers/store'

// export const useUser = () => {
//     const addr = 'http://localhost:4000/session'
//     const fetcher = async (url: string) => {
//         await axios.get(url).then((res) => res.data)
//     }
//     const { data, error } = useSWR(addr, fetcher)

//     return [data, error]
// }

export const useUser = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [isLoading, setIsLoading] = useState(false)
    const { newUser } = userStore()

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            setIsLoading(true)
            const result = await axios.request(params)
            setResponse(result)
        } catch (err: any) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams)
        console.log('ran')
    }, [newUser])

    const getData = () => {
        fetchData(axiosParams)
    }
    console.log(response)
    return { response, error, isLoading, getData }
}
