import create from 'zustand'

interface UserStore {
    newUser: string
    setNewUser: (newUser: string) => void
    newLoginUser: string
    setLoginUser: (newLoginUser: string) => void
}

const userStore = create<UserStore>((set) => ({
    newUser: '',
    setNewUser: (newUser: string) => set({ newUser }),
    newLoginUser: '',
    setLoginUser: (newLoginUser: string) => set({ newLoginUser }),
}))

export default userStore
