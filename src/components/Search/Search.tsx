import { useState } from 'react'

interface SearchProps {
    stateSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ stateSearch }: SearchProps) => {
    const [value, setValue] = useState<string>('')

    const clearSearchHandler = () => {
        setValue('')
        stateSearch('')
    }
    return (
        <div className="flex items-center justify-center w-1/3 gap-4 pb-4 text-base font-medium border-b border-gray-300 font-Roboto">
            <label htmlFor="search" className="text-black capitalize">
                search for a state:
            </label>
            <input
                id="search"
                type="text"
                className="p-1 rounded outline-none bg-slate-100 text-slate-500"
                onChange={(e) => {
                    stateSearch(e.target.value)
                    setValue(e.target.value)
                }}
                value={value}
            />
            <button
                onClick={clearSearchHandler}
                className="p-1 tracking-wide text-white capitalize transition-colors bg-blue-500 rounded hover:bg-blue-700"
            >
                clear search
            </button>
        </div>
    )
}

export default Search
