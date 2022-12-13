import { useState } from 'react'

import userStore from '../../helpers/store'

import Search from '../../components/Search/Search'
import GetStates from '../../components/Get States/GetStates'

const StateSearch = () => {
    const [stateSearch, setStateSearch] = useState<string>('')
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
            <Search stateSearch={setStateSearch} />
            <GetStates searchByState={stateSearch} />
        </div>
    )
}

export default StateSearch
