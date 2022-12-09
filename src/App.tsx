import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import Home from './pages/Home/Home'
import InterstateTrade from './pages/Interstate Trade/InterstateTrade'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import StateEconomySearch from './pages/State Economy/StateEconomySearch'
import StateSearch from './pages/State Search/StateSearch'
import userStore from './helpers/store'
import { useUser } from './hooks/useUser'

const App = () => {
    const { response } = useUser({
        method: 'get',
        url: '/session',
        withCredentials: true,
    })

    return (
        <Router>
            <div className="w-full p-4 bg-gray-600 font-Roboto">
                <header className="flex justify-between text-xl font-medium tracking-wider text-white">
                    <h1>Focus Frontend Interview Exercise</h1>
                    {/* {sessionUser ? <p>Hello, {sessionUser?.username}</p> : null} */}
                    {response?.data ? <p>{response?.data?.username}</p> : null}
                </header>
                <nav className="text-base tracking-wider text-white">
                    <Link to="/" className="hover:text-white/80">
                        Home |
                    </Link>
                    <Link to="/states" className="hover:text-white/80">
                        {' '}
                        States Search Example |
                    </Link>
                    <Link to="/trade" className="hover:text-white/80">
                        {' '}
                        Interstate Trade Search |
                    </Link>
                    <Link to="/economy" className="hover:text-white/80">
                        {' '}
                        State Economy Search |
                    </Link>

                    <Link to="/login" className="hover:text-white/80">
                        {' '}
                        Login |
                    </Link>
                    <Link to="/signup" className="hover:text-white/80">
                        {' '}
                        Signup
                    </Link>
                </nav>
            </div>
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
