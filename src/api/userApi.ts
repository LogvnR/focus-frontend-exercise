import axios from 'axios'

interface SetUserProps {
    username: string
    password: string
}

const userApi = axios.create({
    baseURL: 'http://localhost:4000',
})

export const getUserFn = async () => {
    const response = await userApi.get('/session', {
        withCredentials: true,
    })
    return response.data
}

export const setUserFn = async (userInfo: SetUserProps) => {
    return await userApi.post('/login', userInfo, {
        withCredentials: true,
    })
}

export const createUserFn = async (userInfo: SetUserProps) => {
    return await userApi.post('/signup', userInfo, {
        withCredentials: true,
    })
}
