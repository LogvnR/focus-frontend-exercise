import { Table } from '@mantine/core'

import { useQuery } from '@apollo/client'
import { graphql } from '../../gql/gql'

export const GET_ECONOMY = graphql(/* GraphQL */ `
    query Economy(
        $name: String
        $production: Boolean!
        $employment: Boolean!
        $trade: Boolean!
    ) {
        states(name: $name) {
            name
            productionSummary @include(if: $production) {
                productionTypeByDollars {
                    name
                    amount
                }
                productionTypeByTons {
                    name
                    amount
                }
            }
            employmentSummary @include(if: $employment) {
                topIndustryByAverageSalary {
                    industry
                    averageSalary
                }
            }
            tradeSummary @include(if: $trade) {
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

interface GetStatesProps {
    economyByState: string
    hasTradeData: boolean
    hasProductionData: boolean
    hasEmploymentData: boolean
}

export const GetEconomy = ({
    economyByState,
    hasTradeData,
    hasProductionData,
    hasEmploymentData,
}: GetStatesProps) => {
    const { data, loading, error } = useQuery(GET_ECONOMY, {
        variables: {
            name: economyByState,
            trade: hasTradeData,
            production: hasProductionData,
            employment: hasEmploymentData,
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
                    {hasTradeData ? (
                        <>
                            <th>total dollar amount</th>
                            <th>total tons</th>
                            <th>top 5 states in terms of dollars</th>
                            <th>top 5 states in terms of tons</th>
                        </>
                    ) : null}
                    {hasProductionData ? (
                        <>
                            <th>top 5 industries by dollars</th>
                            <th>top 5 industries by tons</th>
                        </>
                    ) : null}
                    {hasEmploymentData ? (
                        <>
                            <th>top industry</th>
                        </>
                    ) : null}
                </tr>
            </thead>
            <tbody>
                {data?.states?.map((state, i) => (
                    <tr key={i}>
                        <td>{state?.name}</td>
                        {hasTradeData ? (
                            <>
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
                            </>
                        ) : null}
                        {hasProductionData ? (
                            <>
                                <td>
                                    {state?.productionSummary?.productionTypeByDollars
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
                                <td>
                                    {state?.productionSummary?.productionTypeByTons
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
                            </>
                        ) : null}
                        {hasEmploymentData ? (
                            <td>
                                <p className="font-medium max-w-[150px]">
                                    {
                                        state?.employmentSummary
                                            ?.topIndustryByAverageSalary
                                            ?.industry
                                    }
                                    :{' '}
                                    <span className="font-normal">
                                        $
                                        {Number(
                                            state?.employmentSummary
                                                ?.topIndustryByAverageSalary
                                                ?.averageSalary
                                        )?.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>
                                </p>
                            </td>
                        ) : null}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
