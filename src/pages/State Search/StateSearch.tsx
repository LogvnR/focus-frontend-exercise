import React from 'react'
import userStore from '../../helpers/store'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { graphql } from '../../gql/gql'

export const GET_STATE = graphql(/* GraphQL */ `
    query GetState($name: String) {
        states(name: $name) {
            id
            name
        }
    }
`)

const StateSearch = () => {
    const { newUser } = userStore()
    const navigate = useNavigate()
    const { data, loading } = useQuery(GET_STATE, {
        variables: {
            name: 'te',
        },
    })

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

    if (loading) return <p>Loading...</p>

    return (
        <div>
            {data?.states?.map((state) => (
                <div key={state?.id}>
                    <p>{state?.id}</p>
                    <p>{state?.name}</p>
                </div>
            ))}
        </div>
    )
}

export default StateSearch
