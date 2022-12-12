import StateSearch, { GET_STATE } from './StateSearch'
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
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <StateSearch />
            </MockedProvider>
        )

        expect(await findByText('California')).toBeInTheDocument()
        expect(await findByText('Texas')).toBeInTheDocument()
        expect(await findByText('New York')).toBeInTheDocument()
    })
})
