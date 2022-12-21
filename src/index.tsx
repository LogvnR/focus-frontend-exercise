import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import client from './api/client'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 5 * 1000,
        },
    },
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
