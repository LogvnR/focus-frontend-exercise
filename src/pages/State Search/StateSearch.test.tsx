import StateSearch, { GET_STATE } from './StateSearch'
import { screen, render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userStore from '../../helpers/store'

describe('Default State Search', () => {
    beforeEach(() => {
        userStore.setState({ newUser: 'Logan' })
    })
    const mocks: any[] = [
        {
            request: {
                query: GET_STATE,
                variables: {
                    name: '',
                },
            },
            result: {
                data: {
                    states: [
                        {
                            id: '04000US06',
                            name: 'California',
                            key: 'Geography-State-04000US06',
                            slug: 'california',
                            __typename: 'State',
                        },
                        {
                            id: '04000US48',
                            name: 'Texas',
                            key: 'Geography-State-04000US48',
                            slug: 'texas',
                            __typename: 'State',
                        },
                        {
                            id: '04000US36',
                            name: 'New York',
                            key: 'Geography-State-04000US36',
                            slug: 'new-york',
                            __typename: 'State',
                        },
                    ],
                },
            },
        },
    ]

    it('Renders Initial Data', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <StateSearch />
            </MockedProvider>
        )

        expect(await screen.findByText('California')).toBeInTheDocument()
        expect(await screen.findByText('Texas')).toBeInTheDocument()
        expect(await screen.findByText('New York')).toBeInTheDocument()
        screen.debug()
    })
})
