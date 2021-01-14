export type result = {
    quiz_name: string
    rating: number
    pass_date: Date
}
// [
//     {
//         "dude": {
//             "id": "681cf256-ce15-4b27-aa5b-50f193b6fd56",
//             "name": "KEKEWAS"
//         },
//         "pass_date": "2021-01-14T14:03:28.619727+02:00",
//         "quiz": {
//             "creation_date": "2021-01-14T00:21:06.350446+02:00",
//             "id": "e132ff78-59d7-45b8-8d7e-923e2cf166a4",
//             "is_public": true,
//             "questions_count": 2,
//             "quiz_name": "Test request"
//         },
//         "rating": 0.25
//     }]
interface User {
    id: string
    name: string
    key: string
    results?: result[]
    authUser?: (newName: string) => void
    loadFromAsync?: () => void
    fetchResults?: () => void
    clearResults?: () => void
    logoutUser?: () => void
}

export default User;