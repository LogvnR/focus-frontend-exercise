import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import userStore from '../helpers/store'

export const useUser = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [isLoading, setIsLoading] = useState(false)
    const { newLoginUser } = userStore()

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
    }, [newLoginUser])

    const getData = () => {
        fetchData(axiosParams)
    }
    console.log(response)
    return { response, error, isLoading, getData }
}
