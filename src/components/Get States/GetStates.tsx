import { Table } from '@mantine/core'
import { useQuery } from '@apollo/client'
import { graphql } from '../../gql/gql'

export const GET_STATE = graphql(/* GraphQL */ `
    query GetState($name: String) {
        states(name: $name) {
            id
            name
            key
            slug
        }
    }
`)

interface GetStatesProps {
    searchByState: string
}

const apiLink =
    'https://datausa.io/api/data?Geography=Geography-State-04000US48&Nativity=2&measure=Total%20Population,Total%20Population%20MOE%20Appx&drilldowns=Birthplace&properties=Country%20Code'

const GetStates = ({ searchByState }: GetStatesProps) => {
    const { data, loading, error } = useQuery(GET_STATE, {
        variables: {
            name: searchByState,
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>No States Found</p>

    return (
        <Table verticalSpacing="sm" highlightOnHover>
            <thead>
                <tr className="capitalize font-Roboto">
                    <th>id</th>
                    <th>key</th>
                    <th>name</th>
                    <th>slug</th>
                    <th>example api endpoint</th>
                </tr>
            </thead>
            <tbody>
                {data?.states?.map((state) => (
                    <tr key={state?.id}>
                        <td>{state?.id}</td>
                        <td>{state?.key}</td>
                        <td>{state?.name}</td>
                        <td>{state?.slug}</td>
                        <td>
                            <a
                                className="text-blue-500"
                                href={apiLink}
                                target="_blank"
                            >
                                Population Example
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default GetStates
