import { useEffect } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import { getUserFn } from './api/userApi'

import userStore from './helpers/store'

import Home from './pages/Home/Home'
import InterstateTrade from './pages/Interstate Trade/InterstateTrade'
import StateEconomySearch from './pages/State Economy/StateEconomySearch'
import StateSearch from './pages/State Search/StateSearch'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { FaHome } from 'react-icons/fa'

const App = () => {
    const { data, error, isError, isSuccess } = useQuery({
        queryKey: ['user'],
        queryFn: getUserFn,
    })
    const { setNewUser } = userStore()

    if (isError) {
        console.log('error', error)
    }

    if (isSuccess) {
        console.log('success', data)
    }

    useEffect(() => {
        setNewUser(data?.username)
    }, [data])

    return (
        <Router>
            <header className="flex justify-between w-full p-4 bg-gray-600 font-Roboto">
                <div className="flex items-center justify-center w-1/5">
                    <Link to="/" className="text-gray-300 hover:text-blue-200">
                        <FaHome size={24} />
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-2/3">
                    <div className="flex justify-between gap-2 text-xl font-medium tracking-wider text-white">
                        <h1>Focus Frontend Interview Exercise</h1>
                        {data?.username ? (
                            <p className="font-normal text-gray-200">
                                |{' '}
                                <span className="italic">
                                    Hello, {data?.username}
                                </span>
                            </p>
                        ) : null}
                    </div>
                    <nav className="flex gap-12 tracking-wider text-gray-300 justify-betweentext-base">
                        <Link to="/states" className="hover:text-blue-200">
                            {' '}
                            States Search Example
                        </Link>
                        <Link to="/trade" className="hover:text-blue-200">
                            {' '}
                            Interstate Trade Search
                        </Link>
                        <Link to="/economy" className="hover:text-blue-200">
                            {' '}
                            State Economy Search
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center justify-center w-1/5">
                    <Link
                        to="/login"
                        className="text-base font-medium text-gray-300 hover:text-blue-200"
                    >
                        {' '}
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 hover:text-white/80"
                    >
                        {' '}
                        Signup
                    </Link>
                </div>
            </header>
            <main className="w-full p-4 bg-white">
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/states" element={<StateSearch />} />
                    <Route path="/trade" element={<InterstateTrade />} />
                    <Route path="/economy" element={<StateEconomySearch />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App
