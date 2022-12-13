import { useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { useNavigate } from 'react-router-dom'

axios.defaults.baseURL = 'http://localhost:4000'

interface useAxiosProps {
    variant: 'signup' | 'login'
}

export const useAxios = (
    axiosParams: AxiosRequestConfig,
    { variant }: useAxiosProps
) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            setError(undefined)
            setIsLoading(true)
            const result = await axios.request(params)
            setResponse(result)
            variant === 'signup' ? navigate('/login') : navigate('/')
        } catch (err: any) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const sendData = () => {
        fetchData(axiosParams)
    }

    return { response, error, isLoading, sendData }
}
