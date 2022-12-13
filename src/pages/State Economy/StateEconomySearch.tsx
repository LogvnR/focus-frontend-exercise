import { useState } from 'react'
import { Checkbox } from '@mantine/core'

import userStore from '../../helpers/store'
import Search from '../../components/Search/Search'
import { GetEconomy } from '../../components/Get Economy/GetEconomy'

const StateEconomySearch = () => {
    const [economySearch, setEconomySearch] = useState<string>('')
    const [hasTradeData, setHasTradeData] = useState<boolean>(true)
    const [hasProductionData, setHasProductionData] = useState<boolean>(true)
    const [hasEmploymentData, setHasEmploymentData] = useState<boolean>(true)

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
                economyByState={economySearch}
                hasTradeData={hasTradeData}
                hasProductionData={hasProductionData}
                hasEmploymentData={hasEmploymentData}
            />
        </div>
    )
}

export default StateEconomySearch
