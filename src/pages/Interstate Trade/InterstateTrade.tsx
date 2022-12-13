import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import userStore from '../../helpers/store'
import Search from '../../components/Search/Search'
import GetTrades from '../../components/Get Trades/GetTrades'

const InterstateTrade = () => {
    const [interStateSearch, setInterStateSearch] = useState<string>('')
    const navigate = useNavigate()
    const { newUser } = userStore()

    if (!newUser) {
        return (
            <>
                <p className="mx-auto mt-2 font-medium text-blue-600 capitalize">
                    Sorry, You Do Not Have Access To This Page
                </p>
                <button
                    className="p-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-800"
                    onClick={() => navigate('/signup')}
                >
                    Signup Now!
                </button>
            </>
        )
    }

    return (
        <div className="flex flex-col items-center w-full px-12">
            <Search stateSearch={setInterStateSearch} />
            <GetTrades tradesByState={interStateSearch} />
        </div>
    )
}

export default InterstateTrade
