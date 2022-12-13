import { useState } from 'react'

import userStore from '../../helpers/store'
import Search from '../../components/Search/Search'
import GetTrades from '../../components/Get Trades/GetTrades'

const InterstateTrade = () => {
    const [interStateSearch, setInterStateSearch] = useState<string>('')
    const { newUser } = userStore()

    if (!newUser) {
        return (
            <p className="mx-auto mt-2 font-medium text-blue-600 capitalize">
                Sorry, You Do Not Have Access To This Page
            </p>
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
