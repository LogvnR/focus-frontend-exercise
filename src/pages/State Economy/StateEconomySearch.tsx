import React from 'react'
import userStore from '../../helpers/store'
import { useNavigate } from 'react-router-dom'

const StateEconomySearch = () => {
    const { newUser } = userStore()
    const navigate = useNavigate()

    if (newUser === '') {
        setTimeout(() => {
            navigate('/signup')
        }, 3000)
        return (
            <p className="mx-auto mt-2 font-medium text-blue-600 capitalize">
                Sorry, You Do Not Have Access To This Page
            </p>
        )
    }

    return <div>Implement me</div>
}

export default StateEconomySearch
