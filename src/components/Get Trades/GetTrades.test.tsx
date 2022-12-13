import GetTrades, { GET_TRADE } from './GetTrades'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userStore from '../../helpers/store'

describe('Default State Trade Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_TRADE,
                variables: {
                    name: '',
                },
            },
            result: {
                data: {
                    states: [
                        {
                            tradeSummary: {
                                name: 'California',
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
                            tradeSummary: {
                                name: 'Texas',
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
                        {
                            tradeSummary: {
                                name: 'New York',
                                totalDollarAmount: 865636.1591491699,
                                totalTons: 544360.0127358437,
                                statesByDollars: [
                                    {
                                        name: 'Montana',
                                        amount: 302.093017578125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Wyoming',
                                        amount: 305.1299133300781,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 334.9541015625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Mexico',
                                        amount: 593.9080200195312,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 622.2505493164062,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'North Dakota',
                                        amount: 626.5189819335938,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'Alaska',
                                        amount: 7.172892093658447,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 24.14504051208496,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 29.001893997192383,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Montana',
                                        amount: 30.303096771240234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Mexico',
                                        amount: 31.761688232421875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 52.3410758972168,
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
                <GetTrades tradesByState={mockState} />
            </MockedProvider>
        )

        expect(await findByText('California')).toBeInTheDocument()
        expect(await findByText('$2,498,725.27')).toBeInTheDocument()
        expect(await findByText('$305.13')).toBeInTheDocument()
    })
})

describe('Specific State Trade Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_TRADE,
                variables: {
                    name: 'New York',
                },
            },
            result: {
                data: {
                    states: [
                        {
                            tradeSummary: {
                                name: 'New York',
                                totalDollarAmount: 865636.1591491699,
                                totalTons: 544360.0127358437,
                                statesByDollars: [
                                    {
                                        name: 'Montana',
                                        amount: 302.093017578125,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Wyoming',
                                        amount: 305.1299133300781,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 334.9541015625,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Mexico',
                                        amount: 593.9080200195312,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 622.2505493164062,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'North Dakota',
                                        amount: 626.5189819335938,
                                        __typename: 'InterstateTradeForState',
                                    },
                                ],
                                statesByTons: [
                                    {
                                        name: 'Alaska',
                                        amount: 7.172892093658447,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'South Dakota',
                                        amount: 24.14504051208496,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Hawaii',
                                        amount: 29.001893997192383,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'Montana',
                                        amount: 30.303096771240234,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'New Mexico',
                                        amount: 31.761688232421875,
                                        __typename: 'InterstateTradeForState',
                                    },
                                    {
                                        name: 'District of Columbia',
                                        amount: 52.3410758972168,
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

    it('Renders Specific Trade Data', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <GetTrades tradesByState={mockState} />
            </MockedProvider>
        )

        expect(await findByText('New York')).toBeInTheDocument()
        expect(await findByText('$865,636.16')).toBeInTheDocument()
        expect(await findByText('544,360.01t')).toBeInTheDocument()
    })
})
