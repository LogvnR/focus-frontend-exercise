import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import userStore from '../helpers/store'

export const useUser = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [isLoading, setIsLoading] = useState(false)
    const { newLoginUser, setNewUser } = userStore()

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            setIsLoading(true)
            const result = await axios.request(params)
            setResponse(result)
            setNewUser(result?.data?.username)
        } catch (err: any) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams)
    }, [newLoginUser])

    const getData = () => {
        fetchData(axiosParams)
    }

    return { response, error, isLoading, getData }
}
