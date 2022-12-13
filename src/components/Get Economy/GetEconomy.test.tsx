import GetEconomy, { GET_ECONOMY } from './GetEconomy'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userStore from '../../helpers/store'

describe('Default State Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_ECONOMY,
                variables: {
                    name: '',
                    production: true,
                    employment: true,
                    trade: true,
                },
            },
            result: {
                data: {
                    states: [
                        {
                            name: 'California',
                            productionSummary: {
                                productionTypeByDollars: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 6826.62646484375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 4386.19384765625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 88748.703125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 16594.091796875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 41128.37109375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 27351.6640625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                productionTypeByTons: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 2625.473388671875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 12510.236328125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 57864.39453125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 38310.31640625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 8822.240234375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 15259.001953125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'ProductionSummary',
                            },
                            employmentSummary: {
                                topIndustryByAverageSalary: {
                                    industry:
                                        'Internet publishing, broadcasting & web search portals',
                                    averageSalary: '183662.57440768642',
                                    __typename:
                                        'IndustryByAverageSalarySummary',
                                },
                                __typename: 'EmploymentSummary',
                            },
                            tradeSummary: {
                                totalDollarAmount: 2416035.4016723633,
                                totalTons: 1239363.6836853027,
                                statesByDollars: [
                                    {
                                        name: 'Vermont',
                                        amount: 649.1290283203125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 948.3456420898438,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 1000.644287109375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 1092.720458984375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Maine',
                                        amount: 1306.1143798828125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Delaware',
                                        amount: 1310.1824951171875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'District of Columbia',
                                        amount: 35.49781799316406,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 78.73474884033203,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 80.73926544189453,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 104.92720031738281,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'West Virginia',
                                        amount: 106.71863555908203,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Delaware',
                                        amount: 116.71910858154297,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'InterstateTradeSummary',
                            },
                            __typename: 'State',
                        },
                        {
                            name: 'Texas',
                            productionSummary: {
                                productionTypeByDollars: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 18873.267578125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 8250.9345703125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 26089.201171875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 9018.1005859375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 34595.921875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 15950.0927734375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                productionTypeByTons: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 5082.677734375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 52721.08203125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 31919.916015625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 23887.755859375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 8138.09521484375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 8692.3486328125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'ProductionSummary',
                            },
                            employmentSummary: {
                                topIndustryByAverageSalary: {
                                    industry: 'Software publishing',
                                    averageSalary: '123671.95342144532',
                                    __typename:
                                        'IndustryByAverageSalarySummary',
                                },
                                __typename: 'EmploymentSummary',
                            },
                            tradeSummary: {
                                totalDollarAmount: 2498725.2661132812,
                                totalTons: 2823901.859489441,
                                statesByDollars: [
                                    {
                                        name: 'District of Columbia',
                                        amount: 325.0528869628906,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 457.8077697753906,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 607.5430908203125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Hampshire',
                                        amount: 792.025146484375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 840.5855102539062,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Maine',
                                        amount: 895.6046752929688,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'District of Columbia',
                                        amount: 30.57823944091797,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Alaska',
                                        amount: 35.21770477294922,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Hampshire',
                                        amount: 74.50984191894531,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Maine',
                                        amount: 106.2214126586914,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 114.51544189453125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 132.08544921875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'InterstateTradeSummary',
                            },
                            __typename: 'State',
                        },
                    ],
                },
            },
        },
    ]

    const mockState = mocks[0].request.variables.name

    it('Renders Initial Data', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <GetEconomy
                    economyByState={mockState}
                    hasTradeData={true}
                    hasProductionData={true}
                    hasEmploymentData={true}
                />
            </MockedProvider>
        )

        expect(await findByText('California')).toBeInTheDocument()
        expect(await findByText('$2,416,035.40')).toBeInTheDocument()
        expect(
            await findByText(
                'Internet publishing, broadcasting & web search portals:'
            )
        ).toBeInTheDocument()

        expect(await findByText('Texas')).toBeInTheDocument()
        expect(await findByText('Software publishing:')).toBeInTheDocument()
        expect(await findByText('$2,498,725.27')).toBeInTheDocument()
    })
})

describe('Specific Economy State Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_ECONOMY,
                variables: {
                    name: 'Colorado',
                    production: true,
                    employment: true,
                    trade: true,
                },
            },
            result: {
                data: {
                    states: [
                        {
                            name: 'Colorado',
                            productionSummary: {
                                productionTypeByDollars: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 5164.30810546875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 3062.83984375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 2389.793212890625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 1501.80810546875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 7736.263671875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 1998.47900390625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                productionTypeByTons: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 1173.4290771484375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 23203.55078125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 5469.34423828125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 5333.06689453125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 1704.4019775390625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 1007.3512573242188,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'ProductionSummary',
                            },
                            employmentSummary: {
                                topIndustryByAverageSalary: {
                                    industry: 'Carpet & rug mills',
                                    averageSalary: '152411.3448275862',
                                    __typename:
                                        'IndustryByAverageSalarySummary',
                                },
                                __typename: 'EmploymentSummary',
                            },
                            tradeSummary: {
                                totalDollarAmount: 231560.34365844727,
                                totalTons: 297288.9346283674,
                                statesByDollars: [
                                    {
                                        name: 'District of Columbia',
                                        amount: 40.727745056152344,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 46.614532470703125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 49.596290588378906,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Delaware',
                                        amount: 67.41156768798828,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'West Virginia',
                                        amount: 89.71797943115234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 156.58395385742188,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'Delaware',
                                        amount: 0.34351301193237305,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 1.6516770124435425,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 3.2458858489990234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 4.241898059844971,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 6.701180934906006,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Hampshire',
                                        amount: 7.220052719116211,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'InterstateTradeSummary',
                            },
                            __typename: 'State',
                        },
                    ],
                },
            },
        },
    ]

    const mockState = mocks[0].request.variables.name

    it('Renders Specific State Data', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <GetEconomy
                    economyByState={mockState}
                    hasTradeData={true}
                    hasProductionData={true}
                    hasEmploymentData={true}
                />
            </MockedProvider>
        )

        expect(await findByText('Colorado')).toBeInTheDocument()
        expect(await findByText('$231,560.34')).toBeInTheDocument()
        expect(await findByText('Carpet & rug mills:')).toBeInTheDocument()
    })
})

describe('Specific Economy State Data With Filtered Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_ECONOMY,
                variables: {
                    name: 'Colorado',
                    production: false,
                    employment: true,
                    trade: true,
                },
            },
            result: {
                data: {
                    states: [
                        {
                            name: 'Colorado',
                            productionSummary: {
                                productionTypeByDollars: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 5164.30810546875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 3062.83984375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 2389.793212890625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 1501.80810546875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 7736.263671875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 1998.47900390625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                productionTypeByTons: [
                                    {
                                        name: 'Live animals/fish',
                                        amount: 1173.4290771484375,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Cereal grains',
                                        amount: 23203.55078125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Other ag prods.',
                                        amount: 5469.34423828125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Animal feed',
                                        amount: 5333.06689453125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Meat/seafood',
                                        amount: 1704.4019775390625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Milled grain prods.',
                                        amount: 1007.3512573242188,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'ProductionSummary',
                            },
                            employmentSummary: {
                                topIndustryByAverageSalary: {
                                    industry: 'Carpet & rug mills',
                                    averageSalary: '152411.3448275862',
                                    __typename:
                                        'IndustryByAverageSalarySummary',
                                },
                                __typename: 'EmploymentSummary',
                            },
                            tradeSummary: {
                                totalDollarAmount: 231560.34365844727,
                                totalTons: 297288.9346283674,
                                statesByDollars: [
                                    {
                                        name: 'District of Columbia',
                                        amount: 40.727745056152344,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 46.614532470703125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 49.596290588378906,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Delaware',
                                        amount: 67.41156768798828,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'West Virginia',
                                        amount: 89.71797943115234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 156.58395385742188,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'Delaware',
                                        amount: 0.34351301193237305,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Rhode Island',
                                        amount: 1.6516770124435425,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Vermont',
                                        amount: 3.2458858489990234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 4.241898059844971,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 6.701180934906006,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Hampshire',
                                        amount: 7.220052719116211,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                __typename: 'InterstateTradeSummary',
                            },
                            __typename: 'State',
                        },
                    ],
                },
            },
        },
    ]

    const mockState = mocks[0].request.variables.name

    it('Does Not Render Filtered State Data', async () => {
        const { findByText, queryByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <GetEconomy
                    economyByState={mockState}
                    hasTradeData={true}
                    hasProductionData={false}
                    hasEmploymentData={true}
                />
            </MockedProvider>
        )

        expect(await findByText('Colorado')).toBeInTheDocument()
        expect(await findByText('$231,560.34')).toBeInTheDocument()
        // Should not render Production column
        expect(
            await queryByText('Top 5 Industries By Dollars')
        ).not.toBeInTheDocument()
        // Should not render Production data
        expect(await queryByText('Other ag prods.:')).not.toBeInTheDocument()
    })
})
