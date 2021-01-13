interface User {
    id: string
    name: string
    authUser?: (newName: string) => void
}

export default User;