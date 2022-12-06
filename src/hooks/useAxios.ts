import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

export const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [isLoading, setIsLoading] = useState(false)

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

    // useEffect(() => {
    //     fetchData(axiosParams)
    // }, [])

    const sendData = () => {
        fetchData(axiosParams)
    }

    return { response, error, isLoading, sendData }
}
