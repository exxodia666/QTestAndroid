interface User {
    id: string
    name: string
    setName?: (newName: string) => void
}

export default User;