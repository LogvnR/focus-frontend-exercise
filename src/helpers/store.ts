import create from 'zustand'

interface UserStore {
    newUser: string
    setNewUser: (newUser: string) => void
}

const userStore = create<UserStore>((set) => ({
    newUser: '',
    setNewUser: (newUser: string) => set({ newUser }),
}))

export default userStore
