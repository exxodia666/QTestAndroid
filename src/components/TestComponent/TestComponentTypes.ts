export default interface {
    id: string
    name: string
    count_questions: number
    selectTest: (id: string, name: string) => void
}