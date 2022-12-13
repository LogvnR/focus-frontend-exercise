import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '@mantine/core'

import userStore from '../../helpers/store'
import Search from '../../components/Search/Search'
import { GetEconomy } from '../../components/Get Economy/GetEconomy'
import useDebounce from '../../hooks/useDebounce'

const StateEconomySearch = () => {
    const [economySearch, setEconomySearch] = useState<string>('')
    const [hasTradeData, setHasTradeData] = useState<boolean>(true)
    const [hasProductionData, setHasProductionData] = useState<boolean>(true)
    const [hasEmploymentData, setHasEmploymentData] = useState<boolean>(true)

    const navigate = useNavigate()

    const { newUser } = userStore()

    const debouncedEconomySearch = useDebounce(economySearch, 250)

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
            <Search stateSearch={setEconomySearch} />
            <div className="flex justify-center w-full gap-4 my-4">
                <Checkbox
                    value="trade"
                    label="Trade"
                    checked={hasTradeData}
                    onChange={() => setHasTradeData(!hasTradeData)}
                />
                <Checkbox
                    value="production"
                    label="Production"
                    checked={hasProductionData}
                    onChange={() => setHasProductionData(!hasProductionData)}
                />
                <Checkbox
                    value="employment"
                    label="Employment"
                    checked={hasEmploymentData}
                    onChange={() => setHasEmploymentData(!hasEmploymentData)}
                />
            </div>
            <GetEconomy
                economyByState={debouncedEconomySearch}
                hasTradeData={hasTradeData}
                hasProductionData={hasProductionData}
                hasEmploymentData={hasEmploymentData}
            />
        </div>
    )
}

export default StateEconomySearch
