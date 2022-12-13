import { Table } from '@mantine/core'

import { useQuery } from '@apollo/client'
import { graphql } from '../../gql/gql'

export const GET_TRADE = graphql(/* GraphQL */ `
    query GetTrade($name: String) {
        states(name: $name) {
            tradeSummary {
                name
                totalDollarAmount
                totalTons
                statesByDollars {
                    name
                    amount
                }
                statesByTons {
                    name
                    amount
                }
            }
        }
    }
`)

interface GetTradesProps {
    tradesByState: string
}

const GetTrades = ({ tradesByState }: GetTradesProps) => {
    const { data, loading, error } = useQuery(GET_TRADE, {
        variables: {
            name: tradesByState,
        },
    })

    if (loading)
        return (
            <p className="mx-auto mt-2 font-medium text-blue-600 capitalize animate-pulse">
                Loading...
            </p>
        )
    if (error) return <p>No States Found</p>

    return (
        <Table verticalSpacing="sm" highlightOnHover>
            <thead>
                <tr className="capitalize font-Roboto">
                    <th>name</th>
                    <th>total dollar amount</th>
                    <th>total tons</th>
                    <th>top 5 states in terms of dollars</th>
                    <th>top 5 states in terms of tons</th>
                </tr>
            </thead>
            <tbody>
                {data?.states?.map((state, i) => (
                    <tr key={i}>
                        <td>{state?.tradeSummary?.name}</td>
                        <td>
                            $
                            {state?.tradeSummary?.totalDollarAmount?.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }
                            )}
                        </td>
                        <td>
                            {state?.tradeSummary?.totalTons?.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }
                            )}
                            t
                        </td>
                        <td>
                            {state?.tradeSummary?.statesByDollars
                                ?.slice(0, 5)
                                .map((stateByDollar, j) => (
                                    <p key={j} className="font-medium">
                                        {stateByDollar?.name}:{' '}
                                        <span className="font-normal">
                                            $
                                            {stateByDollar?.amount?.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }
                                            )}
                                        </span>
                                    </p>
                                ))}
                        </td>
                        <td>
                            {state?.tradeSummary?.statesByTons
                                ?.slice(0, 5)
                                .map((stateByTon, h) => (
                                    <p key={h} className="font-medium">
                                        {stateByTon?.name}:{' '}
                                        <span className="font-normal">
                                            {stateByTon?.amount?.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }
                                            )}
                                            t
                                        </span>
                                    </p>
                                ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default GetTrades
