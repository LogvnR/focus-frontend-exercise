import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useAxios } from '../../hooks/useAxios'

const schema = z
    .object({
        username: z.string().min(1, { message: 'username is required' }),
        password: z
            .string()
            .min(1, { message: 'password is required' })
            .min(6, { message: 'password must be longer than 6 characters' }),
        cpassword: z
            .string()
            .min(1, { message: 'password is required' })
            .min(6, { message: 'password must be longer than 6 characters' }),
    })
    .refine((data) => data.password === data.cpassword, {
        message: "passwords don't match",
        path: ['cpassword'],
    })

const Signup = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { error, isLoading, sendData } = useAxios({
        method: 'post',
        url: '/signup',
        data: {
            username,
            password,
        },
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) })

    return (
        <section className="flex flex-col items-center justify-center w-full pt-24">
            <h3 className="text-xl font-Roboto">Sign Up!</h3>
            <form
                onSubmit={handleSubmit(() => {
                    console.log(username)
                    console.log(password)
                    sendData()
                })}
                className="flex flex-col w-1/4 gap-y-4"
            >
                <div className="flex flex-col gap-1">
                    <p className="capitalize">username:</p>
                    <input
                        type="text"
                        className={`w-full border-b  outline-none ${
                            errors.username
                                ? 'border-red-600 caret-red-600'
                                : 'border-black caret-black'
                        }`}
                        {...register('username')}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    {errors.username?.message && (
                        <p className="font-medium text-red-600 capitalize">
                            {errors.username?.message}
                        </p>
                    )}
                </div>
                <div>
                    <p className="capitalize">password:</p>
                    <input
                        type="password"
                        className={`w-full border-b  outline-none ${
                            errors.password
                                ? 'border-red-600 caret-red-600'
                                : 'border-black caret-black'
                        }`}
                        {...register('password')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password?.message && (
                        <p className="font-medium text-red-600 capitalize">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                <div>
                    <p className="capitalize">confirm password:</p>
                    <input
                        type="password"
                        className={`w-full border-b  outline-none ${
                            errors.cpassword
                                ? 'border-red-600 caret-red-600'
                                : 'border-black caret-black'
                        }`}
                        {...register('cpassword')}
                    />
                    {errors.cpassword?.message && (
                        <p className="font-medium text-red-600 capitalize">
                            {errors.cpassword?.message}
                        </p>
                    )}
                </div>

                <input
                    type="submit"
                    className="w-full py-4 font-medium tracking-widest text-white uppercase bg-blue-600 font-Roboto hover:bg-blue-700 hover:cursor-pointer"
                />
            </form>
            {isLoading ? <p>Loading...</p> : null}
            {error ? <p>Error</p> : null}
        </section>
    )
}
export default Signup
